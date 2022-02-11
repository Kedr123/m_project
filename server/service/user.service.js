const db = require("../db")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const mailService = require("./mail.service")
const tokenService = require("./token.service")

class UserService {
    async registration(name, surname, birthday, password, email, avatar = "default.png") {
        const checkEmail = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
        if (checkEmail.rows[0]) {
            throw new Error(`Пользователь с почтовым адресов ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await db.query(`INSERT INTO users (name, surname, birthday, activationLink, password, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [name, surname, birthday, activationLink, hashPassword, email])
        console.log(user)
        const userRows = user.rows[0];
        // await mailService.sendActivationMail(email, activationLink)
        const tokens = tokenService.generateToken({id: userRows.id, name: userRows.name})
        await tokenService.saveToken(userRows.id, tokens.refreshToken)

        return {
            ...tokens,
            user: {id: userRows.id, name: userRows.name}
        }
    }
}

module.exports = new UserService()