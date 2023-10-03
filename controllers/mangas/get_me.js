import Manga from "../../models/Manga.js";

export default async (req,res) => {
    try {
        let mangas = await Manga.find({ author_id: req.author._id }).populate({path:'category_id'})
        res.json({
            success: true,
            message: "Author's mangas finded",
            response: mangas
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Author's mangas not finded"
        })
    }
}