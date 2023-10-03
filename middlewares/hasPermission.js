import Author from '../models/Author.js'

export default async function hasPermission(req,res,next) {
  try {
    let authorFind= await Author.findOne({user_id: req.user._id})
    console.log(authorFind)
    console.log(req.user)
    if (!authorFind){
      return res.json({
        success: false,
        message: "Author not finded" 
      })}
    req.author = authorFind
    req.body.author_id = authorFind._id
  return next()
  } catch (error) {
    res.json({
      success: false,
      message: "error"
    })
  }
}