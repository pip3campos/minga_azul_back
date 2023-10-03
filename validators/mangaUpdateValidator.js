import joi from 'joi'
import joiOid from 'joi-oid'

const mangaUpdateValidator = joi.object({
    title: joi.string().min(2).max(25).optional(),
    cover_photo: joi.string().uri().optional(),
    description: joi.string().min(30).max(500).optional(),
    category_id: joiOid.objectId().optional()
})

export default mangaUpdateValidator