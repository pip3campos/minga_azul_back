import User from '../models/User.js'

export default async function create(req, res, next) {
  try {
    let userFind = await User.findOne({ email: req.body.email })
    if (!userFind) {
      return res.json({
        success: false,
        message: "not found"
      })
    }
    return next()
  } catch (error) {
    // Handle the error here
    console.error("Error during user creation:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}
