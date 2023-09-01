import { Router } from "express";
import read from "../controllers/mangas/read.js";
const router = Router();

router.get('/', read)

export default router;
