import { Router } from 'express';
import userRouter from './users.js'
import authorsRouter from './authors.js'
import mangasRouter from './mangas.js'
import chaptersRouter from './chapters.js'
import categoriesRouter from './categories.js'
import chapterByIDRouter from './chapterByID.js'

const router = Router();

router.use('/auth', userRouter)
router.use('/authors', authorsRouter)
router.use('/mangas', mangasRouter)
router.use('/chapters', chaptersRouter)
router.use('/categories', categoriesRouter)
/* router.use('/chapter/:id', chapterByIDRouter) */
router.use('/users', userRouter)

export default router
