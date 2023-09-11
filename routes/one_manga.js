import { Router } from "express";
import read from "../controllers/mangas/read.js"
import read_one from "../controllers/mangas/readOne.js"
const router = Router();

router.get('/', read)
router.get('/:id', read_one)

export default router;
