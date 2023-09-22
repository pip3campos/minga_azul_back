import Comments from "../../models/Comments.js"

const readEveryone = async (req, res) => {
    try {
        let pagination={
            page:1,
            limit:4,
            quantity:0
        }
        let allComments= await Comments.find(req.query).populate("user_id", "email photo").sort({createdAt:-1})
        .skip(pagination.page > 0 ? (pagination.page-1) * pagination.limit : 0)
        .limit(pagination.limit > 0 ? pagination.limit : 0)
        let amountComments= Comments.find(req.query)
        amountComments=(await amountComments).length
        pagination.quantity=amountComments/pagination.limit
        pagination.quantity=Math.ceil(pagination.quantity)
        return res.status(201).json({
            success: true,
            response: {allComments,
                amountPages: pagination.quantity},
            message: "Comments",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export default readEveryone