import { Router } from "express";
import read from "../controllers/auth/read.js";
import userValidator from "../validator/userValidator.js";
import signIn from '../controllers/auth/signin.js'
import validator from '../middlewares/validator.js'
import findUser from '../middlewares/findUser.js'
import password from '../middlewares/password.js'
import createToken from '../middlewares/createToken.js'
import signOut from '../controllers/auth/signout.js'
import passport from "../middlewares/passport.js";
const router = Router();

router.get('/', read)
router.post("/signin",validator(userValidator),findUser,password,createToken,signIn)
router.post("/signout",passport.authenticate('jwt',{session: false}),signOut)

export default router;
