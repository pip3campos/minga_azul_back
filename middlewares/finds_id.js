import Author from '../models/Author.js';

const findAuthor = async (req, res, next) => {
    try {
        const findedAuthor = await Author.findOne({ user_id: req.user._id})
        if (findedAuthor) {
            req.author=findedAuthor
            return next()
        }
        return res.status(404).json({
            success: false,
            message: "Not Finded Author",
            response: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor",
            response: null
        })

    }
};

export default findAuthor;