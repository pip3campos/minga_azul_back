import Manga from "../../models/Manga.js";

export default async (req,res) => {
    let { id } = req.params
    try {
        let mangaUpd = await Manga.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        if (mangaUpd) {
            return res.status(200).json({
                success: true,
                message: "Manga has been updated",
                response: mangaUpd
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Manga by id not finded"
        })
    }
}