import Joi from 'joi'

const userValidator = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': "Email Required",
        'string.email': "Email must contain @xxxx.com"
    }),
    password: Joi.string().min(8).required().messages({
        'any.required': "Password Required",
        'string.min': "Password need min 8 characters",
        'string.pattern': "Password must contain a alpha and numeric characters"
    }),
})

export default userValidator