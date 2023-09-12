import joi from 'joi'

const userValidator = joi.object({
    email: joi.string().email({minDomainSegments: 2}).required().messages({
        'any.required': "Email Required",
        'string.email': "Email must contain @xxxx.com"
    }),
    password: joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]$')).required().messages({
        'any.required': "Password Required",
        'string.min': "Password need min 8 characters",
        'string.pattern': "Password must contain a alpha and numeric characters"
    }),
})

export default userValidator