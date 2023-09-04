import Category from '../../models/Category.js'

export default async(req,res) => {
    try {
        let allCategory = await Category.find()
        res.json({
            success: true,
            response: allCategory
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            response: null
        })
    }
}