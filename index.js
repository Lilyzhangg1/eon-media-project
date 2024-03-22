import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import videoRoutes from "./routes/video.js";

const app = express();
dotenv.config();

const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
        throw err;
        });
}

app.use("/api/videos", videoRoutes)

app.listen(8800, () => {
    connect()
    console.log("Connected to Server");
});