import Comments from "../../models/Comments.js"

const createOne = async (req, res) => {
    try {
        const newComment = new Comments({
            chapter_id:req.body.chapter_id,
            user_id:req.user._id,
            text: req.body.text})
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