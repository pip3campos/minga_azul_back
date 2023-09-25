import { Router } from "express"
import createComment from '../controllers/comments/create.js'
import readComment from '../controllers/comments/all_from_chapter.js'
import updateComments from '../controllers/comments/update.js'
import deleteComment from '../controllers/comments/destroy.js'
import passport from "../middlewares/passport.js"
import commentValidator from "../validators/commmentsValidator.js"
import validator from "../middlewares/validator.js"
import is_property_of_comments from '../middlewares/is_property_of_comments.js'
const router = Router()

router.get('/',readComment)
router.post('/',passport.authenticate('jwt',{session: false}),validator(commentValidator),createComment)
router.put('/:id',passport.authenticate('jwt',{session:false}),validator(commentValidator),is_property_of_comments,updateComments)
router.delete('/:id',passport.authenticate('jwt',{session:false}),is_property_of_comments,deleteComment)
export default router;