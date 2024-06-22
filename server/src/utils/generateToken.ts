import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (userId: string, res: Response) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET!, {
        expiresIn: "15d"
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,  //prevent XSS attacks
        sameSite: "strict",  //prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development" //HTTPS
    });
    return token;
};

export default generateToken;