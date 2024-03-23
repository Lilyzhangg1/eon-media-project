import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Video", VideoSchema);
