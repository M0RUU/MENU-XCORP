import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, exhaustMap, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AccountsService } from 'src/app/authentication/_services/accounts.service';
import { AuthService } from 'src/app/authentication/_services/auth.service';
import { AuthResponse, User, XcorpAccount } from 'src/app/shared';
import { routerObject, SET_TIME_NAVIGATE_SLACK } from 'src/app/shared/_utils';
import { UserService } from 'src/app/site-management/user/_services/user.service';
import { AuthActions } from '.';
import { Store } from '@ngrx/store';
import { AppActions } from '../app';
import { AUTHENTICATION_FAILED, PROFILE_ISSUE } from '../../constants/message';
import { SKIP_NAVIGATE } from '../../constants/error';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private accountsService: AccountsService,
    private userService: UserService,
    private router: Router,
    private store: Store
  ) { }

  signInXcorpAppSuccess$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.signInXcorpAppSuccess),
        switchMap(payload => {
          return this.userService.getProfileOfToken(payload.data.accessToken).pipe(map(user => {
            const authResponse: AuthResponse = {...payload.data, domain: user.company.domain};
            // const authResponse: AuthResponse = {...payload.data, domain: 'localhost:4201'};
            return {
              user,
              authResponse,
            };
          }),
          catchError((error) => {
            return this.catchLogoutFailed(error, AUTHENTICATION_FAILED)
          }));
        }),
        tap((acc: XcorpAccount) => {
          this.accountsService.setMainXcorpAccount(acc);
          let slackIntegrationUrl = '';
          const slackTime: string = localStorage.getItem(SET_TIME_NAVIGATE_SLACK) || '';
          if (slackTime) {
            const isValidTime = ((Date.now() - (+slackTime)) / 60000) < 10 ? true : false; // valid time must be < 5 minutes
            if (isValidTime) {
              slackIntegrationUrl = `${routerObject.orgIntegration.fullPath}/force-slack`;
            }
          }
          localStorage.removeItem(SET_TIME_NAVIGATE_SLACK);
          this.authService.setCurrentUserEmail(acc.user.email);
          this.authService.navigateToDomain(acc.authResponse, slackIntegrationUrl);
        }),
        catchError((error) => {
          return this.catchLogoutFailed(error, AUTHENTICATION_FAILED)
        })
      ),
    { dispatch: false }
  );

  signInSuccess$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.signInSuccess),
        tap((action) => {
          this.authService.setAccessToken(action.data.accessToken)
        }),
        switchMap(payload => {
          return this.userService.getProfile().pipe(catchError((error) => {
            return this.catchLogoutFailed(error, PROFILE_ISSUE)
          }));;
        }),
        tap((user: User) => {
          this.authService.setLoggedUser(JSON.parse(JSON.stringify(user)));
          let url = this.authService.getLastUrl();
          if (url === `${routerObject.orgIntegration.fullPath}/force-slack`) {
            url = `${routerObject.orgIntegration.fullPath}?slackFlg=true`;
            this.authService.setLastUrl(url);
          }
          this.router.navigateByUrl(url || '/').finally(() => this.authService.clearLastUrl());
        }),
        catchError((error) => {
          return this.catchLogoutFailed(error, AUTHENTICATION_FAILED)
        })
      ),
    { dispatch: false }
  );

  signOut$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.signOut),
        tap(() => {
          const user = this.authService.getLoggedUser();
          this.authService.signOut();
          this.router.navigate([`/auth/sign-in`], {queryParams: {'signout-domain': user.company.domain, 'signout-email': user.email}});
        }),
        catchError(error => of(AuthActions.signInFailure({ error })))
      ),
    { dispatch: false }
  );

  getAccountCompanies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getAccountCompanies),
      exhaustMap((props) =>
        this.accountsService.getAccountCompanies(props.accountId).pipe(
          map((accountCompanies) => AuthActions.saveAccountCompanies({ data: accountCompanies })),
          catchError((error) => of(AuthActions.saveAccountCompanies({ data: [] })))
        )
      )
    );
  });

  catchLogoutFailed = (error, message: string) => {
    this.store.dispatch(
      AppActions.loading({
        text: message,
        visible: false,
        level: 'error'
      })
    );

    this.authService.signOut();
    this.authService.clearLastUrl();

    if (!error[SKIP_NAVIGATE]) {
      this.router.navigateByUrl(routerObject.landingPage.fullPath);
    }

    return throwError(() => error);
  }
}
