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
    Posts {
      nextToken
      __typename
    }
    Users {
      nextToken
      __typename
    }
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
    Posts {
      nextToken
      __typename
    }
    Users {
      nextToken
      __typename
    }
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
    Posts {
      nextToken
      __typename
    }
    Users {
      nextToken
      __typename
    }
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
    images
    short
    likes
    comments
    caption
    tags
    commentss {
      nextToken
      __typename
    }
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
    images
    short
    likes
    comments
    caption
    tags
    commentss {
      nextToken
      __typename
    }
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
    images
    short
    likes
    comments
    caption
    tags
    commentss {
      nextToken
      __typename
    }
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
    user_name
    profile_picture
    email
    bio
    commentss {
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
    user_name
    profile_picture
    email
    bio
    commentss {
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
    user_name
    profile_picture
    email
    bio
    commentss {
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
export const createCommentsPost = /* GraphQL */ `mutation CreateCommentsPost(
  $input: CreateCommentsPostInput!
  $condition: ModelCommentsPostConditionInput
) {
  createCommentsPost(input: $input, condition: $condition) {
    id
    commentsId
    postId
    comments {
      id
      content
      createdAt
      updatedAt
      __typename
    }
    post {
      id
      images
      short
      likes
      comments
      caption
      tags
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentsPostMutationVariables,
  APITypes.CreateCommentsPostMutation
>;
export const updateCommentsPost = /* GraphQL */ `mutation UpdateCommentsPost(
  $input: UpdateCommentsPostInput!
  $condition: ModelCommentsPostConditionInput
) {
  updateCommentsPost(input: $input, condition: $condition) {
    id
    commentsId
    postId
    comments {
      id
      content
      createdAt
      updatedAt
      __typename
    }
    post {
      id
      images
      short
      likes
      comments
      caption
      tags
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentsPostMutationVariables,
  APITypes.UpdateCommentsPostMutation
>;
export const deleteCommentsPost = /* GraphQL */ `mutation DeleteCommentsPost(
  $input: DeleteCommentsPostInput!
  $condition: ModelCommentsPostConditionInput
) {
  deleteCommentsPost(input: $input, condition: $condition) {
    id
    commentsId
    postId
    comments {
      id
      content
      createdAt
      updatedAt
      __typename
    }
    post {
      id
      images
      short
      likes
      comments
      caption
      tags
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentsPostMutationVariables,
  APITypes.DeleteCommentsPostMutation
>;
export const createCommentsUser = /* GraphQL */ `mutation CreateCommentsUser(
  $input: CreateCommentsUserInput!
  $condition: ModelCommentsUserConditionInput
) {
  createCommentsUser(input: $input, condition: $condition) {
    id
    commentsId
    userId
    comments {
      id
      content
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      name
      user_name
      profile_picture
      email
      bio
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentsUserMutationVariables,
  APITypes.CreateCommentsUserMutation
>;
export const updateCommentsUser = /* GraphQL */ `mutation UpdateCommentsUser(
  $input: UpdateCommentsUserInput!
  $condition: ModelCommentsUserConditionInput
) {
  updateCommentsUser(input: $input, condition: $condition) {
    id
    commentsId
    userId
    comments {
      id
      content
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      name
      user_name
      profile_picture
      email
      bio
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentsUserMutationVariables,
  APITypes.UpdateCommentsUserMutation
>;
export const deleteCommentsUser = /* GraphQL */ `mutation DeleteCommentsUser(
  $input: DeleteCommentsUserInput!
  $condition: ModelCommentsUserConditionInput
) {
  deleteCommentsUser(input: $input, condition: $condition) {
    id
    commentsId
    userId
    comments {
      id
      content
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      name
      user_name
      profile_picture
      email
      bio
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentsUserMutationVariables,
  APITypes.DeleteCommentsUserMutation
>;
