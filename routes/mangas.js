import { Router } from "express"
import read from '../controllers/mangas/read.js'
import readOne from "../controllers/mangas/readOne.js"

const router = Router();

router.get('/', read )
router.get('/:id', readOne)


export default router;
