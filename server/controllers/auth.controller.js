const db = require("../db")
const userService = require("./../service/user.service")

class authController {
    async registration(req, res, next) {
        try {
            const {name, surname, birthday, password, email, avatar} = req.body;
            const userData = await userService.registration(name, surname, birthday, password, email, avatar)
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            console.log(userData)
            return res.json({...userData});
            // return res.json(userData);
        } catch (e) {
            console.log(e)
            return res.json({error: e.message});

        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async activate(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }
}

module.exports = new authController()