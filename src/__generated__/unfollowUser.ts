/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: unfollowUser
// ====================================================

export interface unfollowUser_unfollowUser {
  __typename: "UnfollowUserResult";
  ok: boolean;
}

export interface unfollowUser {
  unfollowUser: unfollowUser_unfollowUser | undefined;
}

export interface unfollowUserVariables {
  username: string | undefined;
}
