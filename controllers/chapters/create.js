import Chapter from "../../models/Chapter.js";

const create = async (req,res) => {
    try {
        let newChapter = new Chapter(req.body)
        await newChapter.save()
        return res.status(201).json({
            success: true,
            response: newChapter,
            message: "Chapter created successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export default create