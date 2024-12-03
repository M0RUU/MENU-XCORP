import { createAction, props } from '@ngrx/store';
import { AccountCompanyResponse, ExtendCompanyTrialState } from 'src/app/shared';
import { ServerError } from 'src/app/shared/_models/app/error.model';
import { AuthRequest, AuthResponse, ProviderAuthRequest } from 'src/app/shared/_models/user.model';

export const signIn = createAction(
  '[Auth] Sign In',
  props<{ data: AuthRequest }>()
);

export const signInWithProvider = createAction(
  '[Auth] Sign In With Provider',
  props<{ data: ProviderAuthRequest }>()
);

export const signInSuccess = createAction(
  '[Auth] Sign In Success',
  props<{ data: AuthResponse }>()
);

export const signInXcorpAppSuccess = createAction(
  '[Auth] Sign In Xcorp App Success',
  props<{ data: AuthResponse }>()
);

export const signInFailure = createAction(
  '[Auth] Sign In Failure',
  props<{ error: ServerError, message?: string }>()
);

export const saveAccountCompanies = createAction(
  '[Auth] Save Account Companies',
  props<{ data: AccountCompanyResponse[] }>()
);

export const saveExtendCompanyTrial = createAction(
  '[Auth] Save Extend Company Trial',
  props<{ data: ExtendCompanyTrialState }>()
);

export const signOut = createAction(
  '[Auth] Sign Out',
);

export const getAccountCompanies = createAction(
  '[Auth] Get Account Companies',
  props<{ accountId: number }>()
);

export const AuthActions = {
  signIn,
  signInWithProvider,
  signInSuccess,
  signInXcorpAppSuccess,
  signInFailure,
  saveAccountCompanies,
  saveExtendCompanyTrial,
  getAccountCompanies,
  signOut,
};
