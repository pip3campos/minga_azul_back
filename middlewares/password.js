import User from '../models/User.js'
import bcryptjs from 'bcryptjs'

export default async function(req,res,next) {
let userFind= await User.findOne({email: req.body.email})
  if (bcryptjs.compareSync(req.body.password,userFind.password)){
    return next()
  }
  return res.status(400).json({
    sucess: false,
    message: "wrong password",
    response: null
  })

}
