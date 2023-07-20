import express from "express";
import {
    commentPost,
    createPost,
    deletePost,
    getPostDetail,
    getPosts,
    likePost,
} from "../controllers/post.js";

const router = express.Router();

router.post("/create-post", createPost);
router.get("/get-posts", getPosts);
router.get("/post/:id", getPostDetail);
router.delete("/post/:id", deletePost);
router.post("/like-post/:postId", likePost);
router.post("/comment/:postId", commentPost);

export default router;
