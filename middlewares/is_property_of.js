import Manga from '../models/Manga.js'

export default async function is_property_of(req,res,next) {
  let { id } = req.params
  console.log(id)
  try {
    let mangaFind = await Manga.findOne({_id: id})
    let mangaAuthorId = mangaFind.author_id;
    console.log(mangaAuthorId)
    console.log(req.author._id)
    if( req.author._id.toString() === mangaAuthorId.toString() ){
        return next()
    }
  return res.json({
    sucess: false,
    message: "This manga belongs to another author"
  })
  } catch (error) {
    next(error);
  }
}