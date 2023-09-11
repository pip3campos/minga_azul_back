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
router.use('/api/mangas', mangasRouter)
router.use('/api/chapters', chaptersRouter)
router.use('/api/categories', categoriesRouter)
router.use('/api/chapters', chapterByIDRouter)
router.use('/users', userRouter)

export default router
