import joi from "joi";
import joiOid from "joi-oid";

const chapterEditValidator = joi.object({
    manga_id: joiOid.objectId().messages({
        'objectId.required': 'MANGA_ID_REQUIRED',
    }),
    title: joi.string().min(2).max(25).messages({
        'string.empty': 'Title is required',
        'string.min': 'Title is too short',
        'string.max': 'Title is too long',
    }),
    cover_photo: joi.string().uri().messages({
        'string.empty': 'Cover photo is required',
        'string.uri': 'URL needs to be valid',
    }),
    pages: joi.array().items(joi.string().uri().messages({
        'string.empty': 'Pages are required',
        'string.uri': 'URL needs to be valid',
    })),
    order: joi.number().min(1).messages({
        'any.required': 'Order is required',
        'number.base': 'Order needs to be a number',
        'number.min': 'Order needs to be 1 or more'
    })
}).min(1)

export default chapterEditValidator