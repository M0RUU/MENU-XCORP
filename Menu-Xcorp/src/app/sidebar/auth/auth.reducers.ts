import { createReducer, on } from '@ngrx/store';
import { ServerError } from 'src/app/shared/_models/app/error.model';
import { AuthResponse } from 'src/app/shared/_models/user.model';
import { AuthActions } from './auth.actions';
import { AccountCompanyResponse, ExtendCompanyTrialState } from 'src/app/shared';

export const authFeatureKey = 'auth';

export interface AuthState {
  authData: AuthResponse;
  authError: ServerError;
  accountCompanies: AccountCompanyResponse[];
  extendCompanyTrial: ExtendCompanyTrialState;
}

export const initAuthState: AuthState = {
  authData: undefined,
  authError: undefined,
  accountCompanies: [],
  extendCompanyTrial: null,
};

export const authReducer = createReducer(
  initAuthState,
  on(AuthActions.signIn, (state: AuthState, action): AuthState => {
    return {
      ...state,
      authData: null,
      authError: null
    };
  }),
  on(AuthActions.signInSuccess, (state: AuthState, action): AuthState => {
    return {
      ...state,
      authData: action.data,
      authError: null
    };
  }),
  on(AuthActions.signInFailure, (state: AuthState, action): AuthState => {
    return {
      ...state,
      authData: null,
      authError: action.error
    };
  }),
  on(AuthActions.signOut, (state: AuthState, action): AuthState => {
    return initAuthState;
  }),
  on(AuthActions.saveAccountCompanies, (state: AuthState, action): AuthState => {
    return {
      ...state,
      accountCompanies: action.data
    };
  }),
  on(AuthActions.saveExtendCompanyTrial, (state: AuthState, action): AuthState => {
    return {
      ...state,
      extendCompanyTrial: action.data
    };
  }),
);
