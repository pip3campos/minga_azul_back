import { Router } from "express";
import readChapter from "../controllers/chapters/readChapter.js";
const router = Router();

router.get('/', readChapter)

export default router;
