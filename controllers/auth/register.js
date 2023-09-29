import User from '../../models/User.js'

export default async function register(req,res,next) {
  try {
    const newUser = new User(req.body)
    
     await newUser.save(newUser)
     
      
    return res.status(200).json({
        success:true,
        response: newUser,
        message:"User created"
    })
    
  } catch (error) {
    return error;
  }
}