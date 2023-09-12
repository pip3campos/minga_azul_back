import Author from '../../models/Author.js'

export default async(req,res) => {
    try {
        let allAuthors = await Author.find()
        res.json({
            success: true,
            message: "authors",
            response: allAuthors
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}