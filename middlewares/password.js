import User from '../models/User.js'
import compareSync from 'bcryptjs'

export default async function(req,res,next) {
let userFind= User.find({email: req.body.email})
  if (compareSync(userFind.password,req.body.password)){
    return next()
  }
  return  res.status(400).json({
    sucess: false,
    message: "wrong password"
  })

}
