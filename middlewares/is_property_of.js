import Manga from '../models/Manga.js'

export default async function is_property_of(req,res,next) {
  try {
    let mangaFind = await Manga.findOne({_id: req.body.manga_id})
    let mangaAuthorId= mangaFind.author_id;
    if(req.author_id == mangaAuthorId ){
        return next()
    }
  return res.json({
    sucess: false,
    message: "This manga belongs to another author"
  })
  } catch (error) {
    next(err);
  }
}