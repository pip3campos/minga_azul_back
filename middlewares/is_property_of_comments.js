import Comments from '../models/Comments.js'

export default async function is_property_of(req,res,next) {
  try {
    let commentFinded = await Comments.findById({_id: req.params.id})
    console.log(req.user.id);
    if(commentFinded.user_id._id == req.user.id){
        return next()
    }
  return res.json({
    sucess: false,
    message: "This comment belongs to another author"
  })
  } catch (error) {
    return res.json({
      sucess: false,
      message: "property error"
    })
  }
}