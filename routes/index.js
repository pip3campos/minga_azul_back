import { Router } from 'express';
import userRouter from './users.js'
import authorsRouter from './authors.js'
import mangasRouter from './mangas.js'
import chaptersRouter from './chapters.js'
import categoriesRouter from './categories.js'
import paymentRoutes from './payment.routes.js'
import commentsRouter from './comments.js'


const router = Router();

router.use('/auth', userRouter)
router.use('/authors', authorsRouter)
router.use('/mangas', mangasRouter)
router.use('/chapters', chaptersRouter)
router.use('/categories', categoriesRouter)
router.use('/donate', paymentRoutes)
router.use('/comments',commentsRouter)

export default router
