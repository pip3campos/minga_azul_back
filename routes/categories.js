import { Router } from "express";
import read from "../controllers/categories/read.js";
const router = Router();

router.get('/', read)

export default router;