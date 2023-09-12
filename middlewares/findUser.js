import User from '../models/User.js'

export default function create(req,res,next) {
  try {
    let userFind= User.find({email: req.body.email})
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