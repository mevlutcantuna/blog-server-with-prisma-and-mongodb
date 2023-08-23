import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../utils/index.js";

const prisma = new PrismaClient();

const createPost = async (req, res) => {
    const { imageUrl, title, description, authorId } = req.body;

    try {
        if (
            imageUrl === "" ||
            title === "" ||
            description === "" ||
            authorId === ""
        ) {
            return res
                .status(401)
                .json({ message: "Please enter all requirements!" });
        }

        const posts = await prisma.post.create({
            data: { title, imageUrl, description, authorId },
        });

        return res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
    }
};

const getPosts = async (req, res) => {
    const { search } = req.query;

    try {
        if (search === "" || !search) {
            const posts = await prisma.post.findMany({
                orderBy: { createdAt: "desc" },
            });

            return res.status(200).json(posts);
        } else {
            const posts = await prisma.post.findMany({
                orderBy: { createdAt: "desc" },
                where: {
                    OR: [
                        {
                            title: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                        {
                            description: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    ],
                },
            });

            return res.status(200).json(posts);
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
    }
};

const getPostDetail = async (req, res) => {
    const { id } = req.params;
    try {
        if (id.length !== 24) {
            return res
                .status(400)
                .json({ message: "Your Post Id Is Not Correct!" });
        }

        const post = await prisma.post.findUnique({ where: { id } });

        if (!post) {
            return res.status(404).json({ message: "Post Not Found!" });
        }

        return res.status(200).json(post);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.post.findUnique({ where: { id } });
        if (
            post.authorId !==
            verifyToken(req.headers.authorization?.split(" ")[1])
        ) {
            return res
                .status(401)
                .json("You cannot delete another user's post!");
        }

        const deletedPost = await prisma.post.delete({ where: { id } });

        if (deletedPost)
            return res.status(200).json({ message: "Your Post Is Deleted!" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const getLastestPosts = async (req, res) => {
    try {
        const lastestPosts = await prisma.post.findMany({
            orderBy: { createdAt: "desc" },
            take: 3,
        });

        return res.status(200).json(lastestPosts);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export { getPostDetail, getPosts, deletePost, createPost, getLastestPosts };
