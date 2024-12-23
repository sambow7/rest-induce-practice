const router = require('express').Router();
const authCtrl = require('../controllers/auth');



router.get("/auth/sign-up", authCtrl.signUp);
router.post('/auth/sign-up', authCtrl.signUpPost);
router.get("/auth/sign-in", authCtrl.signIn);
router.post("/auth/sign-in", authCtrl.signInPost);
router.get("/auth/sign-out", authCtrl.signout);

module.exports = router;