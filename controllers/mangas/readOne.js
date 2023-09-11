import Mangas from '../../models/Manga.js'

export default async(req,res,next) => {
    try {
        let { id } = req.params
        let manga = await Mangas.findById(id, 'author_id title cover_photo description category_id -_id').populate({path:'category_id'})
        res.json({
            success: true,
            message: "manga",
            response: manga
        })
    } catch (error) {
        next(error)
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}