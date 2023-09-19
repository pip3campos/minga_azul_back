import { Router } from "express"
import createComment from '../controllers/comments/create.js'
import readComment from '../controllers/comments/all_from_chapter.js'
import updateComments from '../controllers/comments/update.js'
import deleteComment from '../controllers/comments/destroy.js'
const router = Router()

router.post('/',createComment)
router.get('/',readComment)
router.update('/',updateComments)
router.delete('/',deleteComment)
export default router;