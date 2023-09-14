import User from '../models/User.js'

export default async function create(req,res,next) {
  try {
    let userFind= await User.findOne({email: req.body.email})
    if (!userFind){
      return res.json({
        sucess: false,
        message: "not finded" 
      })}
  return next()
  } catch (error) {
    res.json({
      success: false,
      message: "error"
    })
  }
}