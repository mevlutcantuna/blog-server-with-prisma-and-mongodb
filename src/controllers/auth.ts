import express from "express";
import { PrismaClient } from "@prisma/client";
import {
    compareHashedPasswordWithPassword,
    generateHashedPassword,
    generateToken,
} from "../utils/index.ts";

const prisma = new PrismaClient();

const signup = async (req: express.Request, res: express.Response) => {
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
};

const login = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user)
            return res.status(401).json({ message: "User doesn't found!" });

        if (compareHashedPasswordWithPassword(password, user.password))
            return res.status(401).json({ message: "Password is wrong!" });

        return res.status(200).json({ ...user, token: generateToken(user.id) });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!" });
    }
};

const getUser = async (req: express.Request, res: express.Response) => {
    try {
        /**
        const user = await prisma.user.findUnique({
            where: { id: req.headers.authorization?.split(" ")[1] as any },
        });

        if (!user)
            return res.status(401).json({ message: "User doesn't found!" });


            return res.status(200).json({ ...user, token: generateToken(user.id) });
         */
        return res.status(201);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!" });
    }
};

export { signup, login, getUser };
