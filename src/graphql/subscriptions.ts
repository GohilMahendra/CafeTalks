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
` as GeneratedSubscription<
  APITypes.OnCreateCommentsSubscriptionVariables,
  APITypes.OnCreateCommentsSubscription
>;
export const onUpdateComments = /* GraphQL */ `subscription OnUpdateComments($filter: ModelSubscriptionCommentsFilterInput) {
  onUpdateComments(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentsSubscriptionVariables,
  APITypes.OnUpdateCommentsSubscription
>;
export const onDeleteComments = /* GraphQL */ `subscription OnDeleteComments($filter: ModelSubscriptionCommentsFilterInput) {
  onDeleteComments(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentsSubscriptionVariables,
  APITypes.OnDeleteCommentsSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateCommentsPost = /* GraphQL */ `subscription OnCreateCommentsPost(
  $filter: ModelSubscriptionCommentsPostFilterInput
) {
  onCreateCommentsPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentsPostSubscriptionVariables,
  APITypes.OnCreateCommentsPostSubscription
>;
export const onUpdateCommentsPost = /* GraphQL */ `subscription OnUpdateCommentsPost(
  $filter: ModelSubscriptionCommentsPostFilterInput
) {
  onUpdateCommentsPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentsPostSubscriptionVariables,
  APITypes.OnUpdateCommentsPostSubscription
>;
export const onDeleteCommentsPost = /* GraphQL */ `subscription OnDeleteCommentsPost(
  $filter: ModelSubscriptionCommentsPostFilterInput
) {
  onDeleteCommentsPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentsPostSubscriptionVariables,
  APITypes.OnDeleteCommentsPostSubscription
>;
export const onCreateCommentsUser = /* GraphQL */ `subscription OnCreateCommentsUser(
  $filter: ModelSubscriptionCommentsUserFilterInput
) {
  onCreateCommentsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentsUserSubscriptionVariables,
  APITypes.OnCreateCommentsUserSubscription
>;
export const onUpdateCommentsUser = /* GraphQL */ `subscription OnUpdateCommentsUser(
  $filter: ModelSubscriptionCommentsUserFilterInput
) {
  onUpdateCommentsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentsUserSubscriptionVariables,
  APITypes.OnUpdateCommentsUserSubscription
>;
export const onDeleteCommentsUser = /* GraphQL */ `subscription OnDeleteCommentsUser(
  $filter: ModelSubscriptionCommentsUserFilterInput
) {
  onDeleteCommentsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentsUserSubscriptionVariables,
  APITypes.OnDeleteCommentsUserSubscription
>;
