import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureKey } from "./auth.reducers";

export const selectAuth = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthData = createSelector(
  selectAuth,
  (state: AuthState) => state.authData
);

export const selectAuthError = createSelector(
  selectAuth,
  (state: AuthState) => state.authError
);

export const selectAccountCompanies = createSelector(
  selectAuth,
  (state: AuthState) => state.accountCompanies
);

export const selectExtendCompanyTrial = createSelector(
  selectAuth,
  (state: AuthState) => state.extendCompanyTrial
);
