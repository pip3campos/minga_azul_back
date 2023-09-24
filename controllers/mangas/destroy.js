import Chapter from '../../models/Chapter.js'
import Manga from "../../models/Manga.js";

export default async (req,res) => {
    let { id } = req.params
    try {
        let destroyChapter = await Chapter.deleteMany(
            { manga_id: id }
        )
        let destroyer = await Manga.findOneAndDelete({ _id: id})
        return res.status(200).json({ response: destroyChapter, destroyer })
    } catch (error) {
        console.log(error)
        return res.status(404).json({ message: "No se pudo eliminar"})
    }
}