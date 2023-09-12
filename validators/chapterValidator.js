import joi from "joi";
import joiOid from "joi-oid";

const chapterValidator = joi.object({
    manga_id: joiOid.objectId().required().messages({
        'any.required': 'MANGA_ID_REQUIRED',
        'objectId.required': 'MANGA_ID_REQUIRED',
    }),
    title: joi.string().min(2).max(25).required().messages({
        'string.empty': 'TITLE_REQUIRED',
        'string.min': 'TITLE_TOO_SHORT',
        'string.max': 'TITLE_TOO_LONG',
        'any.required': 'TITLE_REQUIRED'
    }),
    cover_photo: joi.string().uri().required().messages({
        'string.empty': 'COVER_PHOTO_REQUIRED',
        'string.uri': 'INVALID_URL',
        'any.required': 'COVER_PHOTO_REQUIRED'
    }),
    pages: joi.array().items(joi.string().uri().required().messages({
        'string.empty': 'PAGES_REQUIRED',
        'string.uri': 'INVALID_URL',
        'any.required': 'PAGES_REQUIRED'
    })),
    order: joi.number().required().min(1).messages({
        'any.required': 'ORDER_REQUIRED',
        'number.base': 'ORDER_REQUIRED',
        'number.min': 'INVALID_ORDER'
    })
})

export default chapterValidator