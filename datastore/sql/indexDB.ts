import { Database, open as sqliteOpen } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";
import { Datastore } from "../index";
import { Comment, Like, Post, User } from "../../types";


export class SqlDataStore implements Datastore {
    private db!: Database<sqlite3.Database, sqlite3.Statement>;


    public async openDb() {

        // open the database
        this.db = await sqliteOpen({
            filename: path.join(__dirname, 'codersquare.sqlite'),
            driver: sqlite3.Database
        })

        // forgein key 
        this.db.run("PRAGMA foreign_keys = ON;");

        await this.db.migrate({
            migrationsPath: path.join(__dirname, 'migrations'),
        });

        return this;

    }

    createComment(comment: Comment): Promise<void> {
        throw new Error("Method not implemented.");


    }
    listComments(postId: string): Promise<Comment[]> {
        throw new Error("Method not implemented.");

    }
    deleteComment(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createLike(like: Like): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listPosts(): Promise<Post[]> {
        // List All Posts
        return this.db.all<Post[]>("SELECT * FROM posts");
    }

    async createPost(post: Post): Promise<void> {
        // Create a Post
        await this.db.run("INSERT INTO posts (id, postedAt, title, url, userId) VALUES (?, ?, ?, ?, ?)", post.id, post.postedAt, post.title, post.url, post.userId);
    }

    getPost(id: string): Promise<Post | undefined> {
        throw new Error("Method not implemented.");
    }
    deletePost(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createUser(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    getUserByUserName(email: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
};