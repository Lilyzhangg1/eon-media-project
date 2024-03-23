import express from "express";
import { addVideo } from "../controllers/video.js";
import {  } from "../controllers/video.js";

const router = express.Router();

//create a video
router.post("/", addVideo)
router.put("/:id", addVideo)
router.delete("/:id", addVideo)
router.get("/find/:id", addVideo)

export default router;