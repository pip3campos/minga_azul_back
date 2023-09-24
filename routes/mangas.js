import { Router } from "express"
import read from '../controllers/mangas/read.js'
import readOne from "../controllers/mangas/readOne.js"
import read_news from "../controllers/mangas/read_news.js"
import createOne from '../controllers/mangas/createOne.js'
import findCategory from "../middlewares/findCategory.js"
import mangaValidator from "../validators/mangaValidator.js"
import validator from "../middlewares/validator.js"
import jwt from 'passport-jwt'
import passport from "../middlewares/passport.js"
import hasPermission from "../middlewares/hasPermission.js"
import finds_id from '../middlewares/finds_id.js'
import get_me from "../controllers/mangas/get_me.js"
import mangaUpdateValidator from "../validators/mangaUpdateValidator.js"
import update from "../controllers/mangas/update.js"
import is_active from '../middlewares/is_active.js'
import is_property_of from '../middlewares/is_property_of.js'
import destroy from "../controllers/mangas/destroy.js"

const router = Router()

router.get('/', read )
router.get('/me', passport.authenticate('jwt', {session: false}), finds_id, get_me)
router.get('/:id', readOne)
router.delete('/:id', passport.authenticate('jwt', {session: false}), finds_id, is_active, is_property_of, destroy)
router.get('/news/:id', read_news)
router.put('/:id', passport.authenticate('jwt', {session: false}), finds_id, findCategory, is_active, is_property_of, validator(mangaUpdateValidator), update)
router.post('/', passport.authenticate('jwt', {session: false}), findCategory, hasPermission, validator(mangaValidator), createOne)

export default router;
