import "dotenv/config";
import cors from "cors";
import express from "express";
import router from "./routes/auth.ts";
import { signup } from "./controllers/auth.ts";
import { PrismaClient } from "@prisma/client";
import { generateHashedPassword } from "./utils/index.ts";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.send("Blog Prisma - MongoDB Server!");
});

app.get("/deneme", (req, res) => {
    res.send("Blog Prisma - MongoDB Server! deneme");
});

app.post("/signup", async (req: express.Request, res: express.Response) => {
    const { fullName, email, password } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: {
                fullName: fullName,
                email: email,
                password: generateHashedPassword(password),
            },
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!" });
    }
});

//app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
