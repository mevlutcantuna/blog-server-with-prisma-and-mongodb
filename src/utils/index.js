import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET).id;
};

const generateHashedPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

const compareHashedPasswordWithPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

export {
    generateToken,
    verifyToken,
    generateHashedPassword,
    compareHashedPasswordWithPassword,
};
