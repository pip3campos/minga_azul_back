import Chapter from "../models/Chapter"

const existOrder = async (req, res, next) => {
    try {
        const chapter = await Chapter.findOne({ manga_id: req.body.manga_id, order: req.body.order })
        if ( chapter ) {
            return res.status(403).json({
                success: false,
                message: "Order exists",
                response: null
            })
        }
        return next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor",
            response: null
        })
    }
}

export default existOrder