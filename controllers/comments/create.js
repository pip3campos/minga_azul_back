import Comments from "../../models/Comments.js"

const createOne = async (req, res, next) => {
    try {
        const newComment = new Comments(req.body)
        await newComment.save()
        return res.status(201).json({
            success: true,
            response: newComment,
            message: "Comment posted"
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