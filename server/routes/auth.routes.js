const Router = require("express")

const router = new Router()

const authController = require("./../controllers/auth.controller")

router.post("/registration", authController.registration)
router.post("/login", authController.login)
router.post("/logout", authController.logout)
router.get("/activate/:link", authController.activate)
router.get("/refresh", authController.refresh)



module.exports = router