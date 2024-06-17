import express from "express";
import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";

const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on port: ${5001}`);
});