import { Request, Response } from "express";
import prisma from "../db/prisma";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken";

export const signup = async (req:Request, res:Response) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({
                error: "Please fill in all fields."
            });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({
                error: "Both passwords should match."
            });
        }

        const user = await prisma.user.findUnique({
            where: { username }
        });
        if (user) {
            return res.status(400).json({
                error: "Username already taken."
            });
        }

        //Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await prisma.user.create({
            data: {
                fullName: fullName,
                username: username,
                password: hashedPassword,
                gender: gender,
                profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
            }
        });

        if (newUser) {
            //generate a token
            generateToken(newUser.id, res)

            res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePicture: newUser.profilePicture
            })
        } else {
            res.status(400).json({
                error: "Invalid user data."
            })
        }
    } catch (error: any) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({
            error: "Internal server error."
        });
    }
}

export const login = async (req:Request, res:Response) => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { username }
        });
        if (!user) {
            return res.status(400).json({
                error: "Invlid Credentials."
            })
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                error: "Invalid Credentials."
            })
        }
        generateToken(user.id, res);
        res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePicture,
        });
    } catch (error: any) {
        console.log("Error in login controller.", error.message);
        res.status(500).json({
            error: "Internal server error."
        });
    }
};

export const logout = async (req:Request, res:Response) => {
    res.send("Logged out successfully.")
}