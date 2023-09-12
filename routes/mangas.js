import { Router } from "express"
import read from '../controllers/mangas/read.js'
import readOne from "../controllers/mangas/readOne.js"
import read_news from "../controllers/mangas/read_news.js"
import createOne from '../controllers/mangas/createOne.js'
import findCategory from "../middlewares/findCategory.js"
import mangaValidator from "../validators/mangaValidator.js"
import validator from "../middlewares/validator.js"

const router = Router()

router.get('/', read )
router.get('/:id', readOne)
router.get('/news/:id', read_news)
router.post('/', findCategory, validator(mangaValidator), createOne)

export default router;
