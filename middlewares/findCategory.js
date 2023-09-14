import Category from '../models/Category.js'

const findCategory = async (req, res, next) => {
    try {
        const category = await Category.findOne({ name: req.body.category_id })
        console.log(req.body.category_id)
        if (category) {
            req.body.category_id = category._id
            return next()
        }
        return res.status(404).json({
            success: false,
            message: "Categoria no encontrada",
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

export default findCategory