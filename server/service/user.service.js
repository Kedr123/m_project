const db = require("../db")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const mailService = require("./mail.service")
const tokenService = require("./token.service")
const ApiError = require("./../exceptions/api.error")


class UserService {
    async registration(name, surname, birthday, password, email, avatar = "default.png") {

        // const checkEmail = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
        const checkEmail = await this.userFindOneEmail(email)
        if (checkEmail) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await db.query(`INSERT INTO users (name, surname, birthday, activationLink, password, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [name, surname, birthday, activationLink, hashPassword, email])

        const userRows = user.rows[0];
        await mailService.sendActivationMail(email, process.env.API_URL+"/api/activate/"+activationLink)
        const tokens = tokenService.generateToken({id: userRows.id, name: userRows.name})
        await tokenService.saveToken(userRows.id, tokens.refreshToken)

        return {
            ...tokens,
            user: {id: userRows.id, name: userRows.name}
        }
    }

    async activate(activationLink){
        const user = await db.query(`UPDATE users SET isactivated = true WHERE activationlink = $1 RETURNING *`, [activationLink])

        if (!user.rows[0]){
            throw ApiError.BadRequest(`Эта ссылка для активации не действительна`)
        }
    }

    async login(email, password){
        const user = await this.userFindOneEmail(email)

        if(!user){
            throw ApiError.BadRequest("Неверный email или пароль")
        }

        const isPassEquals = await bcrypt.compare(password, user.password)

        if(!isPassEquals){
            throw ApiError.BadRequest("Неверный email или пароль")
        }
        const tokens = tokenService.generateToken({id: user.id, name: user.name})
        await tokenService.saveToken(user.id, tokens.refreshToken)

        return {
            ...tokens,
            user: {id: user.id, name: user.name}
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async userFindOneEmail(email){
        const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
        return user.rows[0]
    }

    async userFindOneId(id){
        const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id])
        return user.rows[0]
    }

    async refresh(refreshToken){
        if (!refreshToken){
            throw ApiError.UnauthorizedError()
        }

        const userData =  tokenService.validateRefreshToken(refreshToken)
        const tokenFormDb = await tokenService.findToken(refreshToken)

        if(!userData || !tokenFormDb){
            throw ApiError.UnauthorizedError()
        }

        const user = await this.userFindOneId(userData.id)
        const tokens = tokenService.generateToken({id: user.id, name: user.name})
        await tokenService.saveToken(user.id, tokens.refreshToken)

        return {
            ...tokens,
            user: {id: user.id, name: user.name}
        }
    }

    async getAllUsers(){
        const users = await db.query(`SELECT * FROM users`)
        return users.rows
    }
}

module.exports = new UserService()