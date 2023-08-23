// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MediaType = {
  "VIDEO": "VIDEO",
  "IMAGE": "IMAGE"
};

const { Likes, Followings, Followers, Comments, Story, Post, User, LikesPost, CommentsPost, UserPost } = initSchema(schema);

export {
  Likes,
  Followings,
  Followers,
  Comments,
  Story,
  Post,
  User,
  LikesPost,
  CommentsPost,
  UserPost,
  MediaType
};