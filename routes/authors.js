import { Router } from "express";
import read from "../controllers/authors/read.js";
const router = Router();

router.get('/', read)

export default router;
