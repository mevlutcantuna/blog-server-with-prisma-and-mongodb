import express from "express";
import { getUser, login, signup } from "../controllers/auth.ts";

const router = express.Router();

router.get("/22", (req, res) => {
    res.send("Blog Prisma - MongoDB Server 222!");
});

//router.post("/signup", signup);
//router.post("/login", login);
//router.get("/user", getUser);

export default router;
