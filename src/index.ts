import "dotenv/config";
import cors from "cors";
import express from "express";
import router from "./routes/auth.ts";
import { signup } from "./controllers/auth.ts";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Blog Prisma - MongoDB Server!");
});

app.get("/deneme", (req, res) => {
    res.send("Blog Prisma - MongoDB Server! deneme");
});

app.post("/signup", signup);

//app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
