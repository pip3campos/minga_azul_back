import { Router } from "express";
// import read from "../controllers/chapters/read.js";
import readOne from "../controllers/chapters/read_one.js";
import create from "../controllers/chapters/create.js";
import readChapter from "../controllers/chapters/readChapter.js";
import addCoverPhoto from "../middlewares/add_cover_photo.js";
import chapterValidator from "../validators/chapterValidator.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import is_property_of from "../middlewares/is_property_of.js"

const router = Router();

// router.get('/', read)
router.get('/', readChapter)
router.get('/:id', readOne)
router.post('/',passport.authenticate('jwt', {session:false}), is_property_of, addCoverPhoto, validator(chapterValidator) ,create)


export default router;
