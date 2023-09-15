import Manga from "../../models/Manga.js"

const createOne = async (req, res, next) => {
    try {
        const newManga = new Manga(req.body)
        await newManga.save()
        return res.status(201).json({
            success: true,
            response: newManga,
            message: "Manga created"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export default createOne