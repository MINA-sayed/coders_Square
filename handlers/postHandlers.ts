import { db } from "../datastore";
import { ExpressHandler, Post } from "../types";
import crypto from "crypto";
import { CreatePostReq, CreatePostRes, ListPostRequest, ListPostResponse } from "../api";



export const listHandlers: ExpressHandler<ListPostRequest, ListPostResponse> = async (req, res) => {
    res.json({ post: await db.listPosts() });
};



export const createList: ExpressHandler<CreatePostReq, CreatePostRes> = async (req, res) => {


    if (!req.body.title || !req.body.url || !req.body.userId) {

        return res.status(400);
    }

    const post: Post = {
        id: crypto.randomUUID(),
        postedAt: Date.now(),
        title: req.body.title,
        url: req.body.url,
        userId: req.body.userId
    };

    await db.createPost(post);

    res.sendStatus(200)

};