import User from '../models/User.js'

export default function create(req,res,next) {
    let userFind= User.findOne({email: req.body.email})
    
    if (!userFind){
      return res.json({
        sucess: false,
        message: "not finded" 
      })}
  return next()

}