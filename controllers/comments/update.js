import Comments from "../../models/Comments.js"

const updateComment = async (req, res) => {
    try {
         const upComment= await Comments.findOneAndUpdate(
            {_id:req.params.id,
            chapter_id: req.body.chapter_id},
            {text: req.body.text},
            {new:true})
        return res.status(201).json({
            response: upComment,
            message:'updated'})
    } catch (error) {
        return res.status(500).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export default updateComment