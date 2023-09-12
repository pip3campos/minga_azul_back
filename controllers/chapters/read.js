import Chapter from '../../models/Chapter.js'

export default async(req,res) => {
    try {
        let allChapters = await Chapter.find()
        res.json({
            success: true,
            message: "chapters",
            response: allChapters
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}