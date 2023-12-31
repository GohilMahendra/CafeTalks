/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentsInput = {
  id?: string | null,
  content?: string | null,
  postID: string,
};

export type ModelCommentsConditionInput = {
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentsConditionInput | null > | null,
  or?: Array< ModelCommentsConditionInput | null > | null,
  not?: ModelCommentsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Comments = {
  __typename: "Comments",
  id: string,
  content?: string | null,
  postID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCommentsInput = {
  id: string,
  content?: string | null,
  postID?: string | null,
};

export type DeleteCommentsInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  caption: string,
  likes: number,
  comments: number,
  video?: string | null,
  images?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  userID: string,
  type: MEDIATYPE,
};

export enum MEDIATYPE {
  VIDEO = "VIDEO",
  IMAGES = "IMAGES",
}


export type ModelPostConditionInput = {
  caption?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  comments?: ModelIntInput | null,
  video?: ModelStringInput | null,
  images?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  type?: ModelMEDIATYPEInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelMEDIATYPEInput = {
  eq?: MEDIATYPE | null,
  ne?: MEDIATYPE | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  caption: string,
  likes: number,
  comments: number,
  video?: string | null,
  images?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  Comments?: ModelCommentsConnection | null,
  userID: string,
  User?: User | null,
  type: MEDIATYPE,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentsConnection = {
  __typename: "ModelCommentsConnection",
  items:  Array<Comments | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  user_name: string,
  profile_picture?: string | null,
  bio?: string | null,
  Posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type UpdatePostInput = {
  id: string,
  caption?: string | null,
  likes?: number | null,
  comments?: number | null,
  video?: string | null,
  images?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  userID?: string | null,
  type?: MEDIATYPE | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  user_name: string,
  profile_picture?: string | null,
  bio?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  profile_picture?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  user_name?: string | null,
  profile_picture?: string | null,
  bio?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelCommentsFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentsFilterInput | null > | null,
  or?: Array< ModelCommentsFilterInput | null > | null,
  not?: ModelCommentsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  caption?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  comments?: ModelIntInput | null,
  video?: ModelStringInput | null,
  images?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  type?: ModelMEDIATYPEInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  profile_picture?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCommentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  caption?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionIntInput | null,
  comments?: ModelSubscriptionIntInput | null,
  video?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  user_name?: ModelSubscriptionStringInput | null,
  profile_picture?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateCommentsMutationVariables = {
  input: CreateCommentsInput,
  condition?: ModelCommentsConditionInput | null,
};

export type CreateCommentsMutation = {
  createComments?:  {
    __typename: "Comments",
    id: string,
    content?: string | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentsMutationVariables = {
  input: UpdateCommentsInput,
  condition?: ModelCommentsConditionInput | null,
};

export type UpdateCommentsMutation = {
  updateComments?:  {
    __typename: "Comments",
    id: string,
    content?: string | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentsMutationVariables = {
  input: DeleteCommentsInput,
  condition?: ModelCommentsConditionInput | null,
};

export type DeleteCommentsMutation = {
  deleteComments?:  {
    __typename: "Comments",
    id: string,
    content?: string | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    caption: string,
    likes: number,
    comments: number,
    video?: string | null,
    images?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      user_name: string,
      profile_picture?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: MEDIATYPE,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    caption: string,
    likes: number,
    comments: number,
    video?: string | null,
    images?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      user_name: string,
      profile_picture?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: MEDIATYPE,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    caption: string,
    likes: number,
    comments: number,
    video?: string | null,
    images?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      user_name: string,
      profile_picture?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: MEDIATYPE,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    user_name: string,
    profile_picture?: string | null,
    bio?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    user_name: string,
    profile_picture?: string | null,
    bio?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    user_name: string,
    profile_picture?: string | null,
    bio?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCommentsQueryVariables = {
  id: string,
};

export type GetCommentsQuery = {
  getComments?:  {
    __typename: "Comments",
    id: string,
    content?: string | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentsConnection",
    items:  Array< {
      __typename: "Comments",
      id: string,
      content?: string | null,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIDQuery = {
  commentsByPostID?:  {
    __typename: "ModelCommentsConnection",
    items:  Array< {
      __typename: "Comments",
      id: string,
      content?: string | null,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    caption: string,
    likes: number,
    comments: number,
    video?: string | null,
    images?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      user_name: string,
      profile_picture?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: MEDIATYPE,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      caption: string,
      likes: number,
      comments: number,
      video?: string | null,
      images?: Array< string | null > | null,
      tags?: Array< string | null > | null,
      userID: string,
      type: MEDIATYPE,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIDQuery = {
  postsByUserID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      caption: string,
      likes: number,
      comments: number,
      video?: string | null,
      images?: Array< string | null > | null,
      tags?: Array< string | null > | null,
      userID: string,
      type: MEDIATYPE,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    user_name: string,
    profile_picture?: string | null,
    bio?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      user_name: string,
      profile_picture?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCommentsSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsFilterInput | null,
};

export type OnCreateCommentsSubscription = {
  onCreateComments?:  {
    __typename: "Comments",
    id: string,
    content?: string | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentsSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsFilterInput | null,
};

export type OnUpdateCommentsSubscription = {
  onUpdateComments?:  {
    __typename: "Comments",
    id: string,
    content?: string | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentsSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsFilterInput | null,
};

export type OnDeleteCommentsSubscription = {
  onDeleteComments?:  {
    __typename: "Comments",
    id: string,
    content?: string | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    caption: string,
    likes: number,
    comments: number,
    video?: string | null,
    images?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      user_name: string,
      profile_picture?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: MEDIATYPE,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    caption: string,
    likes: number,
    comments: number,
    video?: string | null,
    images?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      user_name: string,
      profile_picture?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: MEDIATYPE,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    caption: string,
    likes: number,
    comments: number,
    video?: string | null,
    images?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      user_name: string,
      profile_picture?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: MEDIATYPE,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    user_name: string,
    profile_picture?: string | null,
    bio?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    user_name: string,
    profile_picture?: string | null,
    bio?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    user_name: string,
    profile_picture?: string | null,
    bio?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
