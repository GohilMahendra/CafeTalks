import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum MediaType {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE"
}



type EagerLikes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Likes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly LikePosts?: (LikesPost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLikes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Likes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly LikePosts: AsyncCollection<LikesPost>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Likes = LazyLoading extends LazyLoadingDisabled ? EagerLikes : LazyLikes

export declare const Likes: (new (init: ModelInit<Likes>) => Likes) & {
  copyOf(source: Likes, mutator: (draft: MutableModel<Likes>) => MutableModel<Likes> | void): Likes;
}

type EagerFollowings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Followings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FollowingsUser?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly followingsFollowingsUserId?: string | null;
}

type LazyFollowings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Followings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FollowingsUser: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly followingsFollowingsUserId?: string | null;
}

export declare type Followings = LazyLoading extends LazyLoadingDisabled ? EagerFollowings : LazyFollowings

export declare const Followings: (new (init: ModelInit<Followings>) => Followings) & {
  copyOf(source: Followings, mutator: (draft: MutableModel<Followings>) => MutableModel<Followings> | void): Followings;
}

type EagerFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Followers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FollowersUser?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly followersFollowersUserId?: string | null;
}

type LazyFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Followers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FollowersUser: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly followersFollowersUserId?: string | null;
}

export declare type Followers = LazyLoading extends LazyLoadingDisabled ? EagerFollowers : LazyFollowers

export declare const Followers: (new (init: ModelInit<Followers>) => Followers) & {
  copyOf(source: Followers, mutator: (draft: MutableModel<Followers>) => MutableModel<Followers> | void): Followers;
}

type EagerComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly CommentUsers?: User | null;
  readonly CommentPosts?: (CommentsPost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentsCommentUsersId?: string | null;
}

type LazyComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly CommentUsers: AsyncItem<User | undefined>;
  readonly CommentPosts: AsyncCollection<CommentsPost>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentsCommentUsersId?: string | null;
}

export declare type Comments = LazyLoading extends LazyLoadingDisabled ? EagerComments : LazyComments

export declare const Comments: (new (init: ModelInit<Comments>) => Comments) & {
  copyOf(source: Comments, mutator: (draft: MutableModel<Comments>) => MutableModel<Comments> | void): Comments;
}

type EagerStory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Story, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly Media?: string | null;
  readonly Typ?: MediaType | keyof typeof MediaType | null;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Story, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly Media?: string | null;
  readonly Typ?: MediaType | keyof typeof MediaType | null;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Story = LazyLoading extends LazyLoadingDisabled ? EagerStory : LazyStory

export declare const Story: (new (init: ModelInit<Story>) => Story) & {
  copyOf(source: Story, mutator: (draft: MutableModel<Story>) => MutableModel<Story> | void): Story;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly images?: (string | null)[] | null;
  readonly media?: string | null;
  readonly likes?: number | null;
  readonly comments?: number | null;
  readonly UserPost?: User | null;
  readonly CommentPost?: (CommentsPost | null)[] | null;
  readonly likess?: (LikesPost | null)[] | null;
  readonly users?: (UserPost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postUserPostId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly images?: (string | null)[] | null;
  readonly media?: string | null;
  readonly likes?: number | null;
  readonly comments?: number | null;
  readonly UserPost: AsyncItem<User | undefined>;
  readonly CommentPost: AsyncCollection<CommentsPost>;
  readonly likess: AsyncCollection<LikesPost>;
  readonly users: AsyncCollection<UserPost>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postUserPostId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName?: string | null;
  readonly Image?: string | null;
  readonly Bio?: string | null;
  readonly Name?: string | null;
  readonly UserFollower?: Followers | null;
  readonly UserFollowing?: Followings | null;
  readonly UPostser?: (UserPost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserFollowerId?: string | null;
  readonly userUserFollowingId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName?: string | null;
  readonly Image?: string | null;
  readonly Bio?: string | null;
  readonly Name?: string | null;
  readonly UserFollower: AsyncItem<Followers | undefined>;
  readonly UserFollowing: AsyncItem<Followings | undefined>;
  readonly UPostser: AsyncCollection<UserPost>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserFollowerId?: string | null;
  readonly userUserFollowingId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerLikesPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LikesPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly likesId?: string | null;
  readonly postId?: string | null;
  readonly likes: Likes;
  readonly post: Post;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLikesPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LikesPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly likesId?: string | null;
  readonly postId?: string | null;
  readonly likes: AsyncItem<Likes>;
  readonly post: AsyncItem<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LikesPost = LazyLoading extends LazyLoadingDisabled ? EagerLikesPost : LazyLikesPost

export declare const LikesPost: (new (init: ModelInit<LikesPost>) => LikesPost) & {
  copyOf(source: LikesPost, mutator: (draft: MutableModel<LikesPost>) => MutableModel<LikesPost> | void): LikesPost;
}

type EagerCommentsPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommentsPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly commentsId?: string | null;
  readonly postId?: string | null;
  readonly comments: Comments;
  readonly post: Post;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommentsPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommentsPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly commentsId?: string | null;
  readonly postId?: string | null;
  readonly comments: AsyncItem<Comments>;
  readonly post: AsyncItem<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommentsPost = LazyLoading extends LazyLoadingDisabled ? EagerCommentsPost : LazyCommentsPost

export declare const CommentsPost: (new (init: ModelInit<CommentsPost>) => CommentsPost) & {
  copyOf(source: CommentsPost, mutator: (draft: MutableModel<CommentsPost>) => MutableModel<CommentsPost> | void): CommentsPost;
}

type EagerUserPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postId?: string | null;
  readonly userId?: string | null;
  readonly post: Post;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postId?: string | null;
  readonly userId?: string | null;
  readonly post: AsyncItem<Post>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserPost = LazyLoading extends LazyLoadingDisabled ? EagerUserPost : LazyUserPost

export declare const UserPost: (new (init: ModelInit<UserPost>) => UserPost) & {
  copyOf(source: UserPost, mutator: (draft: MutableModel<UserPost>) => MutableModel<UserPost> | void): UserPost;
}