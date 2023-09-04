import { Router } from "express";
import read from "../controllers/chapters/read.js";
const router = Router();

router.get('/', read)

export default router;
