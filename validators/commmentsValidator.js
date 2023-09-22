import joi from 'joi'

const commentValidator=joi.object({
    text: joi.string().min(2).required().messages({
        'any.required': "Comment required",
        'string.min':"Comment need contain almost 2 characters",
        'string.empty': "Comment cannot be empty"
    }),
    chapter_id: joi.any()
})

export default commentValidator