/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentsInput = {
  id?: string | null,
  content: string,
  postID: string,
  _version?: number | null,
  commentsUserId?: string | null,
};

export type ModelCommentsConditionInput = {
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentsConditionInput | null > | null,
  or?: Array< ModelCommentsConditionInput | null > | null,
  not?: ModelCommentsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  commentsUserId?: ModelIDInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Comments = {
  __typename: "Comments",
  id: string,
  content: string,
  postID: string,
  User?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  commentsUserId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  user_name?: string | null,
  bio?: string | null,
  email?: string | null,
  profile_picture?: string | null,
  Posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  content: string,
  tags?: Array< string | null > | null,
  images?: Array< string | null > | null,
  short?: string | null,
  type: MediaType,
  likes: number,
  comments: number,
  userID: string,
  User?: User | null,
  Comments?: ModelCommentsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum MediaType {
  VIDEO = "VIDEO",
  IMAGES = "IMAGES",
}


export type ModelCommentsConnection = {
  __typename: "ModelCommentsConnection",
  items:  Array<Comments | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCommentsInput = {
  id: string,
  content?: string | null,
  postID?: string | null,
  _version?: number | null,
  commentsUserId?: string | null,
};

export type DeleteCommentsInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  content: string,
  tags?: Array< string | null > | null,
  images?: Array< string | null > | null,
  short?: string | null,
  type: MediaType,
  likes: number,
  comments: number,
  userID: string,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  images?: ModelStringInput | null,
  short?: ModelStringInput | null,
  type?: ModelMediaTypeInput | null,
  likes?: ModelIntInput | null,
  comments?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMediaTypeInput = {
  eq?: MediaType | null,
  ne?: MediaType | null,
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

export type UpdatePostInput = {
  id: string,
  content?: string | null,
  tags?: Array< string | null > | null,
  images?: Array< string | null > | null,
  short?: string | null,
  type?: MediaType | null,
  likes?: number | null,
  comments?: number | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  user_name?: string | null,
  bio?: string | null,
  email?: string | null,
  profile_picture?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profile_picture?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  user_name?: string | null,
  bio?: string | null,
  email?: string | null,
  profile_picture?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelCommentsFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentsFilterInput | null > | null,
  or?: Array< ModelCommentsFilterInput | null > | null,
  not?: ModelCommentsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  commentsUserId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  images?: ModelStringInput | null,
  short?: ModelStringInput | null,
  type?: ModelMediaTypeInput | null,
  likes?: ModelIntInput | null,
  comments?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profile_picture?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCommentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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
  content?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  short?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionIntInput | null,
  comments?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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
  user_name?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  profile_picture?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateCommentsMutationVariables = {
  input: CreateCommentsInput,
  condition?: ModelCommentsConditionInput | null,
};

export type CreateCommentsMutation = {
  createComments?:  {
    __typename: "Comments",
    id: string,
    content: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentsUserId?: string | null,
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
    content: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentsUserId?: string | null,
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
    content: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentsUserId?: string | null,
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
    content: string,
    tags?: Array< string | null > | null,
    images?: Array< string | null > | null,
    short?: string | null,
    type: MediaType,
    likes: number,
    comments: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      items:  Array< {
        __typename: "Comments",
        id: string,
        content: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        commentsUserId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    content: string,
    tags?: Array< string | null > | null,
    images?: Array< string | null > | null,
    short?: string | null,
    type: MediaType,
    likes: number,
    comments: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      items:  Array< {
        __typename: "Comments",
        id: string,
        content: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        commentsUserId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    content: string,
    tags?: Array< string | null > | null,
    images?: Array< string | null > | null,
    short?: string | null,
    type: MediaType,
    likes: number,
    comments: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      items:  Array< {
        __typename: "Comments",
        id: string,
        content: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        commentsUserId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name?: string | null,
    user_name?: string | null,
    bio?: string | null,
    email?: string | null,
    profile_picture?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        tags?: Array< string | null > | null,
        images?: Array< string | null > | null,
        short?: string | null,
        type: MediaType,
        likes: number,
        comments: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    name?: string | null,
    user_name?: string | null,
    bio?: string | null,
    email?: string | null,
    profile_picture?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        tags?: Array< string | null > | null,
        images?: Array< string | null > | null,
        short?: string | null,
        type: MediaType,
        likes: number,
        comments: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    name?: string | null,
    user_name?: string | null,
    bio?: string | null,
    email?: string | null,
    profile_picture?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        tags?: Array< string | null > | null,
        images?: Array< string | null > | null,
        short?: string | null,
        type: MediaType,
        likes: number,
        comments: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetCommentsQueryVariables = {
  id: string,
};

export type GetCommentsQuery = {
  getComments?:  {
    __typename: "Comments",
    id: string,
    content: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentsUserId?: string | null,
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
      content: string,
      postID: string,
      User?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        user_name?: string | null,
        bio?: string | null,
        email?: string | null,
        profile_picture?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentsUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentsQuery = {
  syncComments?:  {
    __typename: "ModelCommentsConnection",
    items:  Array< {
      __typename: "Comments",
      id: string,
      content: string,
      postID: string,
      User?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        user_name?: string | null,
        bio?: string | null,
        email?: string | null,
        profile_picture?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentsUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      content: string,
      postID: string,
      User?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        user_name?: string | null,
        bio?: string | null,
        email?: string | null,
        profile_picture?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentsUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    tags?: Array< string | null > | null,
    images?: Array< string | null > | null,
    short?: string | null,
    type: MediaType,
    likes: number,
    comments: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      items:  Array< {
        __typename: "Comments",
        id: string,
        content: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        commentsUserId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content: string,
      tags?: Array< string | null > | null,
      images?: Array< string | null > | null,
      short?: string | null,
      type: MediaType,
      likes: number,
      comments: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        user_name?: string | null,
        bio?: string | null,
        email?: string | null,
        profile_picture?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      tags?: Array< string | null > | null,
      images?: Array< string | null > | null,
      short?: string | null,
      type: MediaType,
      likes: number,
      comments: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        user_name?: string | null,
        bio?: string | null,
        email?: string | null,
        profile_picture?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      content: string,
      tags?: Array< string | null > | null,
      images?: Array< string | null > | null,
      short?: string | null,
      type: MediaType,
      likes: number,
      comments: number,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        user_name?: string | null,
        bio?: string | null,
        email?: string | null,
        profile_picture?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    user_name?: string | null,
    bio?: string | null,
    email?: string | null,
    profile_picture?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        tags?: Array< string | null > | null,
        images?: Array< string | null > | null,
        short?: string | null,
        type: MediaType,
        likes: number,
        comments: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCommentsSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsFilterInput | null,
};

export type OnCreateCommentsSubscription = {
  onCreateComments?:  {
    __typename: "Comments",
    id: string,
    content: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentsUserId?: string | null,
  } | null,
};

export type OnUpdateCommentsSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsFilterInput | null,
};

export type OnUpdateCommentsSubscription = {
  onUpdateComments?:  {
    __typename: "Comments",
    id: string,
    content: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentsUserId?: string | null,
  } | null,
};

export type OnDeleteCommentsSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsFilterInput | null,
};

export type OnDeleteCommentsSubscription = {
  onDeleteComments?:  {
    __typename: "Comments",
    id: string,
    content: string,
    postID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentsUserId?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    tags?: Array< string | null > | null,
    images?: Array< string | null > | null,
    short?: string | null,
    type: MediaType,
    likes: number,
    comments: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      items:  Array< {
        __typename: "Comments",
        id: string,
        content: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        commentsUserId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    tags?: Array< string | null > | null,
    images?: Array< string | null > | null,
    short?: string | null,
    type: MediaType,
    likes: number,
    comments: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      items:  Array< {
        __typename: "Comments",
        id: string,
        content: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        commentsUserId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    tags?: Array< string | null > | null,
    images?: Array< string | null > | null,
    short?: string | null,
    type: MediaType,
    likes: number,
    comments: number,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      user_name?: string | null,
      bio?: string | null,
      email?: string | null,
      profile_picture?: string | null,
      Posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentsConnection",
      items:  Array< {
        __typename: "Comments",
        id: string,
        content: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        commentsUserId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    user_name?: string | null,
    bio?: string | null,
    email?: string | null,
    profile_picture?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        tags?: Array< string | null > | null,
        images?: Array< string | null > | null,
        short?: string | null,
        type: MediaType,
        likes: number,
        comments: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    user_name?: string | null,
    bio?: string | null,
    email?: string | null,
    profile_picture?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        tags?: Array< string | null > | null,
        images?: Array< string | null > | null,
        short?: string | null,
        type: MediaType,
        likes: number,
        comments: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    user_name?: string | null,
    bio?: string | null,
    email?: string | null,
    profile_picture?: string | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        tags?: Array< string | null > | null,
        images?: Array< string | null > | null,
        short?: string | null,
        type: MediaType,
        likes: number,
        comments: number,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
