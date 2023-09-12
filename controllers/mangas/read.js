import Mangas from '../../models/Manga.js'

export default async(req,res) => {
    try {
        let queries={}
        let pagination = {page:1 , limit:0}
        let next=false
        let prev=false
        if(req.query.title) queries.title = new RegExp((req.query.title).trim(),'i')
        if(req.query.category) queries.category_id = (req.query.category).split(",")
        if (req.query.page) {pagination.page = req.query.page}
        if (req.query.quantity) {pagination.limit = req.query.quantity}
        let allMangas = await Mangas.find(queries).sort({title:1}).select("title description cover_photo category_id _id")
            .skip(pagination.page > 0 ? (pagination.page-1) * pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
        let h = await Mangas.find(queries)
        h=h.length
        let maxPages=(h/pagination.limit).toFixed()
        if(maxPages>pagination.page) {next=true}
        if(pagination.page>1) {prev=true}    
        res.json({
            success: true,
            message: "mangas",
            response: allMangas,
            pages: {
                maxPages,
                prev,
                next
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}