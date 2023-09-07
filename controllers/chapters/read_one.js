let get_one = async (req, res, next) => {
    try {
        let all = await Chapter.findById(req.params.id).select("-createdAt -updatedAt -__v -cover_photo")


        if (all) {
            let next = await Chapter.findOne({
                manga_id: all.manga_id,
                order: all.order + 1,
            }).select('_id')
            console.log(next);
            return res.status(200).json({
                succes: true,
                all,
                next: next._id
            })
        }
        return res.status(404).json({
            response: "the chapter was not found"
        })

    } catch (error) {
        next(error)
    }
}

export default get_one