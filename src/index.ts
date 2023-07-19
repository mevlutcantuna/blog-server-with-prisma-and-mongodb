import "dotenv/config";
import cors from "cors";
import express from "express";
import router from "./routes/auth.ts";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Blog Prisma - MongoDB Server!");
});

//app.use(router);

/*
app.get("/users", async (req: any, res: any) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!" });
    }
});
 */

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
