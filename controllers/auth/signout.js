import User from '../../models/User.js'

export default async function create(req,res,next) {
  try {
     await User.findOneAndUpdate(
      {
        email: req.body.email,
        online: false,
      },{new:true})    

    return res.status(200).json({
      message: "User SignOut"
    })
    
  } catch (error) {
    next(error)
  }
}