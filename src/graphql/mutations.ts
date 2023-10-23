/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComments = /* GraphQL */ `mutation CreateComments(
  $input: CreateCommentsInput!
  $condition: ModelCommentsConditionInput
) {
  createComments(input: $input, condition: $condition) {
    id
    content
    postID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentsMutationVariables,
  APITypes.CreateCommentsMutation
>;
export const updateComments = /* GraphQL */ `mutation UpdateComments(
  $input: UpdateCommentsInput!
  $condition: ModelCommentsConditionInput
) {
  updateComments(input: $input, condition: $condition) {
    id
    content
    postID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentsMutationVariables,
  APITypes.UpdateCommentsMutation
>;
export const deleteComments = /* GraphQL */ `mutation DeleteComments(
  $input: DeleteCommentsInput!
  $condition: ModelCommentsConditionInput
) {
  deleteComments(input: $input, condition: $condition) {
    id
    content
    postID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentsMutationVariables,
  APITypes.DeleteCommentsMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
