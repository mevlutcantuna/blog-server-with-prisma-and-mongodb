const express = require("express");
//import { getUser, login, signup } from "../controllers/auth.ts";

const router = express.Router();

router.get("/deneme", (req: any, res: any) => {
    res.send("Blog Prisma - MongoDB Server Deneme!");
});

//router.post("/signup", signup);
//router.post("/login", login);
//router.get("/user", getUser);

module.exports = router;
