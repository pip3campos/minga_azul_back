import Author from '../models/Author.js'

const findAuthor = async (req, res, next) => {
    try {
        const foundAuthor = await Author.findOne({user_id: req.user._id});
        if (foundAuthor) {
            if(foundAuthor.active===true){
                next()
            }else{
                return res.status(400).json({
                    success: false,
                    message: "Author is not active",
                    response: null
                })
            }
        }else{
            return res.status(404).json({
                success: false,
                message: "Author not found",
                response: null
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor",
            response: null
        })
    }
}

export default findAuthor