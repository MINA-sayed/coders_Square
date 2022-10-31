import { CommentDao } from "./dao/CommentDao";
import { LikeDao } from "./dao/LikeDao";
import { PostDao } from "./dao/PostDao";
import { UserDao } from "./dao/UserDao";
import { SqlDataStore } from "./sql/indexDB";

export interface Datastore extends CommentDao, LikeDao, PostDao, UserDao { }

export let db: Datastore;

export async function initDB() {

    db = await new SqlDataStore().openDb();
};