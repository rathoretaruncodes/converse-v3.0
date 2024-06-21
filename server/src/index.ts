import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cookieParser());     //Parsing cookies
app.use(express.json());     //Parsing application/json

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on port: ${5001}`);
});