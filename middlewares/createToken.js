import sign from 'jsonwebtoken'

export default (req,res,next)=>{
    console.log(req)
    console.log(req.token)
const token= sign (
    {email: req.body.email || req.user.email},
    process.env.SECRET,
    {expiresIn: 86.400}
)
req.token = token
return next()
}