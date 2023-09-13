import Chapters from '../../models/Chapter.js'

export default async (req, res, next) => {
    let pagination = {page: 1, limit: 6}
    if(req.query.page) pagination.page = req.query.page
    let { manga_id } = req.query
    let skip = ( pagination.page > 0 ) ? (pagination.page-1)*pagination.limit : 0
    let limit = pagination.limit > 0 ? pagination.limit : 0
    try {
        let totalChapters = await Chapters.countDocuments({ manga_id })
        let chapters = await Chapters.find({ manga_id }, 'manga_id title cover_photo pages order')
            .sort({ order: 1 })
            .skip(skip)
            .limit(limit)
            .populate('manga_id')
        
        let hasPrev = pagination.page > 1
        let hasNext = (pagination.page * pagination.limit) < totalChapters

        res.json({
            success: true,
            message: "Chapters",
            response: chapters,
            hasPrev: hasPrev,
            hasNext: hasNext
        })
    } catch (error) {
        next(error)
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}

