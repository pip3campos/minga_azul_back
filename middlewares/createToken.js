import jwt from 'jsonwebtoken'

export default (req,res,next)=>{
    const { email, author_id } = req.body || req.user
    const token= jwt.sign (
        {email, author_id},
        process.env.SECRET,
        {expiresIn: 86400}
    )
    req.token = token
    return next()
}