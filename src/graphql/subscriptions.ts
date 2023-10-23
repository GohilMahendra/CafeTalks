/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComments = /* GraphQL */ `subscription OnCreateComments($filter: ModelSubscriptionCommentsFilterInput) {
  onCreateComments(filter: $filter) {
    id
    content
    postID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentsSubscriptionVariables,
  APITypes.OnCreateCommentsSubscription
>;
export const onUpdateComments = /* GraphQL */ `subscription OnUpdateComments($filter: ModelSubscriptionCommentsFilterInput) {
  onUpdateComments(filter: $filter) {
    id
    content
    postID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentsSubscriptionVariables,
  APITypes.OnUpdateCommentsSubscription
>;
export const onDeleteComments = /* GraphQL */ `subscription OnDeleteComments($filter: ModelSubscriptionCommentsFilterInput) {
  onDeleteComments(filter: $filter) {
    id
    content
    postID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentsSubscriptionVariables,
  APITypes.OnDeleteCommentsSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
    id
    caption
    likes
    comments
    video
    images
    tags
    Comments {
      nextToken
      __typename
    }
    userID
    User {
      id
      name
      email
      user_name
      profile_picture
      bio
      createdAt
      updatedAt
      __typename
    }
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
    id
    caption
    likes
    comments
    video
    images
    tags
    Comments {
      nextToken
      __typename
    }
    userID
    User {
      id
      name
      email
      user_name
      profile_picture
      bio
      createdAt
      updatedAt
      __typename
    }
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
    id
    caption
    likes
    comments
    video
    images
    tags
    Comments {
      nextToken
      __typename
    }
    userID
    User {
      id
      name
      email
      user_name
      profile_picture
      bio
      createdAt
      updatedAt
      __typename
    }
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    email
    user_name
    profile_picture
    bio
    Posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    name
    email
    user_name
    profile_picture
    bio
    Posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    name
    email
    user_name
    profile_picture
    bio
    Posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
