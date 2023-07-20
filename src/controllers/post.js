import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (req, res) => {
    const { imageUrl, title, description, authorId } = req.body;
    console.log(title);
    try {
        const posts = await prisma.post.create({
            data: { title, imageUrl, description, authorId },
        });

        return res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Somethins went wrong!" });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            orderBy: { createdAt: "desc" },
        });

        return res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Somethins went wrong!" });
    }
};

const getPostDetail = async (req, res) => {};

const deletePost = async (req, res) => {};

const likePost = async (req, res) => {};

const commentPost = async (req, res) => {};

export {
    getPostDetail,
    getPosts,
    deletePost,
    likePost,
    commentPost,
    createPost,
};
