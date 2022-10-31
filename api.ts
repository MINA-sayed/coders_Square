import { Post } from "./types";

// Post type definitions APIs
export type CreatePostReq = Pick<Post, 'title' | 'url' | 'userId'>;

export interface CreatePostRes { };

export interface ListPostRequest { };
export interface ListPostResponse {
    post: Post[];
};

export interface GetPostRequest { };
export interface GetPostResponse {
    post: Post;
};
