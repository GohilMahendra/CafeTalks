/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentsInput = {
  id?: string | null,
  content?: string | null,
};

export type ModelCommentsConditionInput = {
  content?: ModelStringInput | null,
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

export type Comments = {
  __typename: "Comments",
  id: string,
  content?: string | null,
  Posts?: ModelCommentsPostConnection | null,
  Users?: ModelCommentsUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentsPostConnection = {
  __typename: "ModelCommentsPostConnection",
  items:  Array<CommentsPost | null >,
  nextToken?: string | null,
};

export type CommentsPost = {
  __typename: "CommentsPost",
  id: string,
  commentsId: string,
  postId: string,
  comments: Comments,
  post: Post,
  createdAt: string,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  id: string,
  images?: Array< string | null > | null,
  short?: string | null,
  likes?: number | null,
  comments?: number | null,
  caption?: string | null,
  tags?: Array< string | null > | null,
  commentss?: ModelCommentsPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentsUserConnection = {
  __typename: "ModelCommentsUserConnection",
  items:  Array<CommentsUser | null >,
  nextToken?: string | null,
};

export type CommentsUser = {
  __typename: "CommentsUser",
  id: string,
  commentsId: string,
  userId: string,
  comments: Comments,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  user_name: string,
  profile_picture: string,
  email: string,
  bio?: string | null,
  commentss?: ModelCommentsUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCommentsInput = {
  id: string,
  content?: string | null,
};

export type DeleteCommentsInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  images?: Array< string | null > | null,
  short?: string | null,
  likes?: number | null,
  comments?: number | null,
  caption?: string | null,
  tags?: Array< string | null > | null,
};

export type ModelPostConditionInput = {
  images?: ModelStringInput | null,
  short?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  comments?: ModelIntInput | null,
  caption?: ModelStringInput | null,
  tags?: ModelStringInput | null,
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

export type UpdatePostInput = {
  id: string,
  images?: Array< string | null > | null,
  short?: string | null,
  likes?: number | null,
  comments?: number | null,
  caption?: string | null,
  tags?: Array< string | null > | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  user_name: string,
  profile_picture: string,
  email: string,
  bio?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  profile_picture?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  user_name?: string | null,
  profile_picture?: string | null,
  email?: string | null,
  bio?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCommentsPostInput = {
  id?: string | null,
  commentsId: string,
  postId: string,
};

export type ModelCommentsPostConditionInput = {
  commentsId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentsPostConditionInput | null > | null,
  or?: Array< ModelCommentsPostConditionInput | null > | null,
  not?: ModelCommentsPostConditionInput | null,
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

export type UpdateCommentsPostInput = {
  id: string,
  commentsId?: string | null,
  postId?: string | null,
};

export type DeleteCommentsPostInput = {
  id: string,
};

export type CreateCommentsUserInput = {
  id?: string | null,
  commentsId: string,
  userId: string,
};

export type ModelCommentsUserConditionInput = {
  commentsId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCommentsUserConditionInput | null > | null,
  or?: Array< ModelCommentsUserConditionInput | null > | null,
  not?: ModelCommentsUserConditionInput | null,
};

export type UpdateCommentsUserInput = {
  id: string,
  commentsId?: string | null,
  userId?: string | null,
};

export type DeleteCommentsUserInput = {
  id: string,
};

export type ModelCommentsFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentsFilterInput | null > | null,
  or?: Array< ModelCommentsFilterInput | null > | null,
  not?: ModelCommentsFilterInput | null,
};

export type ModelCommentsConnection = {
  __typename: "ModelCommentsConnection",
  items:  Array<Comments | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  images?: ModelStringInput | null,
  short?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  comments?: ModelIntInput | null,
  caption?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  user_name?: ModelStringInput | null,
  profile_picture?: ModelStringInput | null,
  email?: ModelStringInput | null,
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

export type ModelCommentsPostFilterInput = {
  id?: ModelIDInput | null,
  commentsId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentsPostFilterInput | null > | null,
  or?: Array< ModelCommentsPostFilterInput | null > | null,
  not?: ModelCommentsPostFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentsUserFilterInput = {
  id?: ModelIDInput | null,
  commentsId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCommentsUserFilterInput | null > | null,
  or?: Array< ModelCommentsUserFilterInput | null > | null,
  not?: ModelCommentsUserFilterInput | null,
};

export type ModelSubscriptionCommentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
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
  images?: ModelSubscriptionStringInput | null,
  short?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionIntInput | null,
  comments?: ModelSubscriptionIntInput | null,
  caption?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
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
  user_name?: ModelSubscriptionStringInput | null,
  profile_picture?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionCommentsPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  commentsId?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentsPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentsPostFilterInput | null > | null,
};

export type ModelSubscriptionCommentsUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  commentsId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentsUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentsUserFilterInput | null > | null,
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
    Posts?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
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
    Posts?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
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
    Posts?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
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
    images?: Array< string | null > | null,
    short?: string | null,
    likes?: number | null,
    comments?: number | null,
    caption?: string | null,
    tags?: Array< string | null > | null,
    commentss?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
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
    images?: Array< string | null > | null,
    short?: string | null,
    likes?: number | null,
    comments?: number | null,
    caption?: string | null,
    tags?: Array< string | null > | null,
    commentss?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
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
    images?: Array< string | null > | null,
    short?: string | null,
    likes?: number | null,
    comments?: number | null,
    caption?: string | null,
    tags?: Array< string | null > | null,
    commentss?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
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
    user_name: string,
    profile_picture: string,
    email: string,
    bio?: string | null,
    commentss?:  {
      __typename: "ModelCommentsUserConnection",
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
    user_name: string,
    profile_picture: string,
    email: string,
    bio?: string | null,
    commentss?:  {
      __typename: "ModelCommentsUserConnection",
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
    user_name: string,
    profile_picture: string,
    email: string,
    bio?: string | null,
    commentss?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentsPostMutationVariables = {
  input: CreateCommentsPostInput,
  condition?: ModelCommentsPostConditionInput | null,
};

export type CreateCommentsPostMutation = {
  createCommentsPost?:  {
    __typename: "CommentsPost",
    id: string,
    commentsId: string,
    postId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      short?: string | null,
      likes?: number | null,
      comments?: number | null,
      caption?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentsPostMutationVariables = {
  input: UpdateCommentsPostInput,
  condition?: ModelCommentsPostConditionInput | null,
};

export type UpdateCommentsPostMutation = {
  updateCommentsPost?:  {
    __typename: "CommentsPost",
    id: string,
    commentsId: string,
    postId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      short?: string | null,
      likes?: number | null,
      comments?: number | null,
      caption?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentsPostMutationVariables = {
  input: DeleteCommentsPostInput,
  condition?: ModelCommentsPostConditionInput | null,
};

export type DeleteCommentsPostMutation = {
  deleteCommentsPost?:  {
    __typename: "CommentsPost",
    id: string,
    commentsId: string,
    postId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      short?: string | null,
      likes?: number | null,
      comments?: number | null,
      caption?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentsUserMutationVariables = {
  input: CreateCommentsUserInput,
  condition?: ModelCommentsUserConditionInput | null,
};

export type CreateCommentsUserMutation = {
  createCommentsUser?:  {
    __typename: "CommentsUser",
    id: string,
    commentsId: string,
    userId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      user_name: string,
      profile_picture: string,
      email: string,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentsUserMutationVariables = {
  input: UpdateCommentsUserInput,
  condition?: ModelCommentsUserConditionInput | null,
};

export type UpdateCommentsUserMutation = {
  updateCommentsUser?:  {
    __typename: "CommentsUser",
    id: string,
    commentsId: string,
    userId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      user_name: string,
      profile_picture: string,
      email: string,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentsUserMutationVariables = {
  input: DeleteCommentsUserInput,
  condition?: ModelCommentsUserConditionInput | null,
};

export type DeleteCommentsUserMutation = {
  deleteCommentsUser?:  {
    __typename: "CommentsUser",
    id: string,
    commentsId: string,
    userId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      user_name: string,
      profile_picture: string,
      email: string,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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
    Posts?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
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
    images?: Array< string | null > | null,
    short?: string | null,
    likes?: number | null,
    comments?: number | null,
    caption?: string | null,
    tags?: Array< string | null > | null,
    commentss?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
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
      images?: Array< string | null > | null,
      short?: string | null,
      likes?: number | null,
      comments?: number | null,
      caption?: string | null,
      tags?: Array< string | null > | null,
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
    user_name: string,
    profile_picture: string,
    email: string,
    bio?: string | null,
    commentss?:  {
      __typename: "ModelCommentsUserConnection",
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
      user_name: string,
      profile_picture: string,
      email: string,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentsPostQueryVariables = {
  id: string,
};

export type GetCommentsPostQuery = {
  getCommentsPost?:  {
    __typename: "CommentsPost",
    id: string,
    commentsId: string,
    postId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      short?: string | null,
      likes?: number | null,
      comments?: number | null,
      caption?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsPostsQueryVariables = {
  filter?: ModelCommentsPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsPostsQuery = {
  listCommentsPosts?:  {
    __typename: "ModelCommentsPostConnection",
    items:  Array< {
      __typename: "CommentsPost",
      id: string,
      commentsId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsPostsByCommentsIdQueryVariables = {
  commentsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentsPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsPostsByCommentsIdQuery = {
  commentsPostsByCommentsId?:  {
    __typename: "ModelCommentsPostConnection",
    items:  Array< {
      __typename: "CommentsPost",
      id: string,
      commentsId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsPostsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentsPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsPostsByPostIdQuery = {
  commentsPostsByPostId?:  {
    __typename: "ModelCommentsPostConnection",
    items:  Array< {
      __typename: "CommentsPost",
      id: string,
      commentsId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentsUserQueryVariables = {
  id: string,
};

export type GetCommentsUserQuery = {
  getCommentsUser?:  {
    __typename: "CommentsUser",
    id: string,
    commentsId: string,
    userId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      user_name: string,
      profile_picture: string,
      email: string,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsUsersQueryVariables = {
  filter?: ModelCommentsUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsUsersQuery = {
  listCommentsUsers?:  {
    __typename: "ModelCommentsUserConnection",
    items:  Array< {
      __typename: "CommentsUser",
      id: string,
      commentsId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsUsersByCommentsIdQueryVariables = {
  commentsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentsUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsUsersByCommentsIdQuery = {
  commentsUsersByCommentsId?:  {
    __typename: "ModelCommentsUserConnection",
    items:  Array< {
      __typename: "CommentsUser",
      id: string,
      commentsId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentsUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsUsersByUserIdQuery = {
  commentsUsersByUserId?:  {
    __typename: "ModelCommentsUserConnection",
    items:  Array< {
      __typename: "CommentsUser",
      id: string,
      commentsId: string,
      userId: string,
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
    Posts?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
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
    Posts?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
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
    Posts?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
    Users?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
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
    images?: Array< string | null > | null,
    short?: string | null,
    likes?: number | null,
    comments?: number | null,
    caption?: string | null,
    tags?: Array< string | null > | null,
    commentss?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
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
    images?: Array< string | null > | null,
    short?: string | null,
    likes?: number | null,
    comments?: number | null,
    caption?: string | null,
    tags?: Array< string | null > | null,
    commentss?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
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
    images?: Array< string | null > | null,
    short?: string | null,
    likes?: number | null,
    comments?: number | null,
    caption?: string | null,
    tags?: Array< string | null > | null,
    commentss?:  {
      __typename: "ModelCommentsPostConnection",
      nextToken?: string | null,
    } | null,
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
    user_name: string,
    profile_picture: string,
    email: string,
    bio?: string | null,
    commentss?:  {
      __typename: "ModelCommentsUserConnection",
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
    user_name: string,
    profile_picture: string,
    email: string,
    bio?: string | null,
    commentss?:  {
      __typename: "ModelCommentsUserConnection",
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
    user_name: string,
    profile_picture: string,
    email: string,
    bio?: string | null,
    commentss?:  {
      __typename: "ModelCommentsUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentsPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsPostFilterInput | null,
};

export type OnCreateCommentsPostSubscription = {
  onCreateCommentsPost?:  {
    __typename: "CommentsPost",
    id: string,
    commentsId: string,
    postId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      short?: string | null,
      likes?: number | null,
      comments?: number | null,
      caption?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentsPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsPostFilterInput | null,
};

export type OnUpdateCommentsPostSubscription = {
  onUpdateCommentsPost?:  {
    __typename: "CommentsPost",
    id: string,
    commentsId: string,
    postId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      short?: string | null,
      likes?: number | null,
      comments?: number | null,
      caption?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentsPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsPostFilterInput | null,
};

export type OnDeleteCommentsPostSubscription = {
  onDeleteCommentsPost?:  {
    __typename: "CommentsPost",
    id: string,
    commentsId: string,
    postId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      short?: string | null,
      likes?: number | null,
      comments?: number | null,
      caption?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentsUserSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsUserFilterInput | null,
};

export type OnCreateCommentsUserSubscription = {
  onCreateCommentsUser?:  {
    __typename: "CommentsUser",
    id: string,
    commentsId: string,
    userId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      user_name: string,
      profile_picture: string,
      email: string,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentsUserSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsUserFilterInput | null,
};

export type OnUpdateCommentsUserSubscription = {
  onUpdateCommentsUser?:  {
    __typename: "CommentsUser",
    id: string,
    commentsId: string,
    userId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      user_name: string,
      profile_picture: string,
      email: string,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentsUserSubscriptionVariables = {
  filter?: ModelSubscriptionCommentsUserFilterInput | null,
};

export type OnDeleteCommentsUserSubscription = {
  onDeleteCommentsUser?:  {
    __typename: "CommentsUser",
    id: string,
    commentsId: string,
    userId: string,
    comments:  {
      __typename: "Comments",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      user_name: string,
      profile_picture: string,
      email: string,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
