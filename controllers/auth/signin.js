import User from '../../models/User.js'

export default async function signIn(req,res) {
  try {
    const findUser = await User.findOneAndUpdate(
      {
        email: req.body.email,
        online: true,
      },{new:true}).select("-password")

    return res.status(200).json({
      response: { 
        token: req.token,
        findUser
      }
    })
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error"
    })
  }
}
