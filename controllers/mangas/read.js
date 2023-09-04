import Mangas from '../../models/Manga.js'

export default async(req,res) => {
    try {
        let allMangas = await Mangas.find()
        res.json({
            success: true,
            message: "mangas",
            response: allMangas
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}