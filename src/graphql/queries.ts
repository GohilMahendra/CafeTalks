/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getComments = /* GraphQL */ `query GetComments($id: ID!) {
  getComments(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentsQueryVariables,
  APITypes.GetCommentsQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentsFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getCommentsPost = /* GraphQL */ `query GetCommentsPost($id: ID!) {
  getCommentsPost(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentsPostQueryVariables,
  APITypes.GetCommentsPostQuery
>;
export const listCommentsPosts = /* GraphQL */ `query ListCommentsPosts(
  $filter: ModelCommentsPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentsPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      commentsId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsPostsQueryVariables,
  APITypes.ListCommentsPostsQuery
>;
export const commentsPostsByCommentsId = /* GraphQL */ `query CommentsPostsByCommentsId(
  $commentsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentsPostFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsPostsByCommentsId(
    commentsId: $commentsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      commentsId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsPostsByCommentsIdQueryVariables,
  APITypes.CommentsPostsByCommentsIdQuery
>;
export const commentsPostsByPostId = /* GraphQL */ `query CommentsPostsByPostId(
  $postId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentsPostFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsPostsByPostId(
    postId: $postId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      commentsId
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsPostsByPostIdQueryVariables,
  APITypes.CommentsPostsByPostIdQuery
>;
export const getCommentsUser = /* GraphQL */ `query GetCommentsUser($id: ID!) {
  getCommentsUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentsUserQueryVariables,
  APITypes.GetCommentsUserQuery
>;
export const listCommentsUsers = /* GraphQL */ `query ListCommentsUsers(
  $filter: ModelCommentsUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentsUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      commentsId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsUsersQueryVariables,
  APITypes.ListCommentsUsersQuery
>;
export const commentsUsersByCommentsId = /* GraphQL */ `query CommentsUsersByCommentsId(
  $commentsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentsUserFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsUsersByCommentsId(
    commentsId: $commentsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      commentsId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsUsersByCommentsIdQueryVariables,
  APITypes.CommentsUsersByCommentsIdQuery
>;
export const commentsUsersByUserId = /* GraphQL */ `query CommentsUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentsUserFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      commentsId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsUsersByUserIdQueryVariables,
  APITypes.CommentsUsersByUserIdQuery
>;
