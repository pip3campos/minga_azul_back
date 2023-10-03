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
import userRegisterValidator from "../validator/userRegisterValidator.js";
import findUserForRegister from "../middlewares/findUserForRegister.js";
import passwordRegister from "../middlewares/passwordRegister.js";
import register from "../controllers/auth/register.js"
import firebaseConvertUserImage from '../middlewares/firebaseConvertUserImage.js'
import verifyAccount from "../controllers/auth/verifyAccount.js";
import googleSignin from "../controllers/auth/googleSignin.js";
const router = Router();

router.get('/', read)
router.post("/signup",findUserForRegister,firebaseConvertUserImage,validator(userRegisterValidator), passwordRegister, register)
router.post("/signin",validator(userValidator),findUser,password,createToken,signIn)
router.post("/signout",passport.authenticate('jwt',{session: false}),signOut)
router.get("/verify/:verify_code", verifyAccount)
router.post("/google-signin", googleSignin)


export default router;
