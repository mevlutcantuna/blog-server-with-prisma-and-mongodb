import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
        expiresIn: "1d",
    });
};

const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET as string);
};

const generateHashedPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

const compareHashedPasswordWithPassword = (
    hashedPassword: string,
    password: string,
) => {
    return bcrypt.compareSync(password, hashedPassword);
};

export {
    generateToken,
    verifyToken,
    generateHashedPassword,
    compareHashedPasswordWithPassword,
};
