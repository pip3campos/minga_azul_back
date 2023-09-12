import joi from 'joi'
import joiOid from 'joi-oid'

const mangaValidator = joi.object({
    author_id: joiOid.objectId().required(),
    company_id: joiOid.objectId(),
    title: joi.string().min(2).max(25).required(),
    cover_photo: joi.string().uri().required(),
    description: joi.string().min(50).max(300).required(),
    category_id: joiOid.objectId().required()
})

export default mangaValidator