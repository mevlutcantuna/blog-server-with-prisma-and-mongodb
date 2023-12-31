import express from "express";
import {
    createPost,
    deletePost,
    getLastestPosts,
    getPostDetail,
    getPosts,
} from "../controllers/post.js";

const router = express.Router();

router.post("/post", createPost);
router.get("/posts", getPosts);
router.get("/post/:id", getPostDetail);
router.delete("/post/:id", deletePost);
router.get("/lastest-posts", getLastestPosts);
export default router;
