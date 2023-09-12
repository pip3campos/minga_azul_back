import { Router } from "express";
import readChapter from "../controllers/chapters/readChapter.js";
import readOne from "../controllers/chapters/read_one.js";
const router = Router();

router.get('/', readChapter)
router.get('/:id', readOne)

export default router;
