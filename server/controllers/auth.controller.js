const db = require("../db")
const userService = require("./../service/user.service")
const userValidator = require("./../validators/user.validator")
const {validationResult} = require("express-validator")
const ApiError = require("./../exceptions/api.error")

class authController {
    async registration(req, res, next) {
        try {

            const errors = validationResult(req)

            if (!errors.isEmpty()){
                return next(ApiError.BadRequest("Ошибка валидации", errors.array()))
            }

            const {name, surname, birthday, password, email, avatar} = req.body;

            // const validate = userValidator.add({name, surname, birthday, password, email, avatar})
            //
            // if (Object.keys(validate.errors).length != 0) {
            //     return res.json(validate);
            // }

            const userData = await userService.registration(name, surname, birthday, password, email, avatar)
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({...userData});
        } catch (e) {

            next(e)

        }
    }

    async login(req, res, next) {
        try {

            const errors = validationResult(req)

            if (!errors){
                console.log(errors)
                return next(ApiError.BadRequest("Ошибка валидации", errors.array()))
            }

            const {email, password} = req.body
            const userData = await userService.login(email, password)

            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({...userData});
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.status(200).json(true)
        } catch (e) {
            next(e)
        }
    }

    async activate(req, res, next) {
        try {
            await userService.activate(req.params.link)
            return res.json("true")
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken)
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({...userData});
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new authController()