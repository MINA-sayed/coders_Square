import { Post, User } from "./types";

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


// User APIs
export type SignUpRequest = Pick<User, 'email' | 'firstName' | 'lastName' | 'userName' | 'password'>;
export interface SignUpResponse { };

export interface SignInRequest {
    login: string;
    password: string;
};

export type SignInResponse = Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'userName'>;