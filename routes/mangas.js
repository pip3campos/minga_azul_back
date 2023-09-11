import { Router } from "express";
import read from "../controllers/mangas/read.js";
import read_news from "../controllers/mangas/read_news.js";
const router = Router();

router.get('/', read)
router.get("/:id", read_news)


export default router;
