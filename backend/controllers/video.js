export const addVideo = async (req, next) => {
    const newVideo = new Video();
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo);
    } catch (err) {
        next(err);
    }
};

export const updateVideo = async (req, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404, "Video not found!"))
        res.status(200).json(updatedVideo);
    } catch (err) {
        next(err);
    }
};

export const deleteVideo = async (req, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404, "Video not found!"))
        res.status(200).json(updatedVideo);
    } catch (err) {
        next(err);
    }
};

export const getVideo = async (req, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video);
    } catch (err) {
        next(err);
    }
};

export const search = async (req, next) => {
    const query = req.query.q;
    try {
        const videos = await Video.find({
            title: {$regex: query, $option: "i"
        }}).limit(40);
        res.status(200).json(videos);
    } catch (err) {
        next (err);
    }
};