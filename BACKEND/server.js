import express from "express";
import {app,server} from "./socket/socket.js";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";   
const port= process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${port}`);
});

// touch 6
