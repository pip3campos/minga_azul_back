import { Router } from "express";
import read from "../controllers/authors/read.js";
import read_me from "../controllers/authors/read_me.js";
const router = Router();

router.get('/', read)
router.get('/:id', read_me)


export default router;
