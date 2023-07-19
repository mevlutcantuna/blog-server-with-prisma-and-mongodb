import "dotenv/config";
import cors from "cors";
import express from "express";
import router from "./routes/auth.ts";
import { getUser } from "./controllers/auth.ts";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Blog Prisma - MongoDB Server!");
});

app.use(router);

app.get("/user", getUser);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
