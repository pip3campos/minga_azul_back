import Comments from "../../models/Comments.js"

const createOne = async (req, res, next) => {
    try {
        const destroyComment = await Comments.deleteOne({_id: req.params.id})
        return res.status(201).json({
            success: true,
            response: destroyComment,
            message: "Comment eliminated"
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