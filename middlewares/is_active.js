import Author from '../models/Author.js'

const findAuthor = async (req, res, next) => {
    try {
        const findedAuthor = await Author.findById(req.author._id)
        if (findedAuthor.active===true) {
            return next()
        }
        return res.status(404).json({
            success: false,
            message: "Is Not Active",
            response: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor",
            response: null
        })
    }
}

export default findAuthor