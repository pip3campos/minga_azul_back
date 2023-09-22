import { Router } from "express";
// import read from "../controllers/chapters/read.js";
import readOne from "../controllers/chapters/read_one.js";
import create from "../controllers/chapters/create.js";
import readChapter from "../controllers/chapters/readChapter.js";
import addCoverPhoto from "../middlewares/add_cover_photo.js";
import chapterValidator from "../validators/chapterValidator.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import isPropertyOf from "../middlewares/is_property_of.js"
import finds_id from "../middlewares/finds_id.js"
import get_me from "../controllers/chapters/get_me.js";
import chapterEditValidator from "../validators/chapterEditValidator.js";
import updateChapter from "../controllers/chapters/updateChapter.js";
import is_active from "../middlewares/is_active.js"
import destroyChapter from "../controllers/chapters/destroy.js";

const router = Router();

// router.get('/', read)
router.get('/', readChapter)
router.get('/me', passport.authenticate('jwt', { session: false }), finds_id, isPropertyOf, get_me);
router.get('/:id', readOne)
router.post('/',passport.authenticate('jwt', {session:false}), /*isPropertyOf,*/ addCoverPhoto, validator(chapterValidator), create)
// RECORDAR PROBAR POST CON PROPERTY OF
router.put('/:id', passport.authenticate('jwt', { session: false }), finds_id, is_active, isPropertyOf, validator(chapterEditValidator), updateChapter);
router.delete('/:id', passport.authenticate('jwt', { session: false }), finds_id,is_active ,isPropertyOf, destroyChapter);

export default router;
