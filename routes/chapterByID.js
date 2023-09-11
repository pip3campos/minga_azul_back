import { Router } from "express";
import readOne from "../controllers/chapters/read_one.js";
const router = Router();

router.get('/:id', readOne)

export default router;
