import cors from "cors"
import express from "express"
//import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
dotenv.config()

//const prisma = new PrismaClient()
const app = express()
app.use(cors())
app.use(express.json()) // For parsing JSON data
app.use(express.urlencoded({ extended: true })) // For parsing URL-encoded data

app.get("/", (req, res) => {
    res.send("Hello World!23")
})
/*
app.post(
    "/create-user",
    async (req: express.Request, res: express.Response) => {
        const { fullName, email, password } = req.body

        try {
            const newUser = await prisma.user.create({
                data: {
                    fullName: fullName,
                    email: email,
                    password: password,
                },
            })
            res.status(201).json(newUser)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Something went wrong!" })
        }
    },
)

app.get("/users", async (req: express.Request, res: express.Response) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!" })
    }
})
 */

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
