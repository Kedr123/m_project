const Router = require("express")
const router = new Router()
const authController = require("./../controllers/auth.controller")
const {body} = require("express-validator")

router.post("/registration",
    body("email").isEmail(),
    body("password").isLength({min: 6, max: 32}),
    authController.registration)

router.post("/login",
    body("email").isEmail(),
    authController.login)
router.post("/logout", authController.logout)
router.get("/activate/:link", authController.activate)
router.get("/refresh", authController.refresh)



module.exports = router