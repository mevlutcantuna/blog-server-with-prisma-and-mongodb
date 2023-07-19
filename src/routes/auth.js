import express from "express";
import { getUser, login, signup } from "../controllers/auth.js";

const router = express.Router();

router.get("/deneme", (req, res) => {
    res.send("Blog Prisma - MongoDB Server Deneme!");
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", getUser);

export default router;
