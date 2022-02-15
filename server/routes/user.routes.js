const Router = require("express")
const authMiddleware = require("./../middlewares/auth.middleware")

const router = new Router()

const userController = require("./../controllers/user.controller")

router.post("/user", userController.creatorUser)
router.get("/user", authMiddleware, userController.getUsers)
router.get("/user/:id", userController.getOneUser)
router.put("/user", userController.updateUser)
router.delete("/user/:id", userController.deleteUser)


module.exports = router