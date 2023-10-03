import User from '../models/User.js'

export default async function findUserForRegister(req,res,next) {
  try {
    let userFind = await User.find({email: req.body.email})
    if (userFind.length>0){
      return res.json({
        success: false,
        message: "Ya existe un usuario con este email" 
      })}
  return next()
  } catch (error) {
    return error
  }
}