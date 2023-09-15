import User from '../models/User.js'
import bcrypt from 'bcryptjs'


export default async function(req,res,next) {
let userFind= await User.findOne({email: req.body.email})
const samePassword = bcrypt.compareSync(req.body.password,userFind.password)
  if ( samePassword ){
    return next()
  }
  return res.status(400).json({
    sucess: false,
    message: "wrong password",
    response: null
  })

}
