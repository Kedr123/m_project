const jwt = require("jsonwebtoken")
const db = require("./../db")

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30s"})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"})

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token){
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }
    
    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken){
        const token = await db.query(`INSERT INTO tokens (user_id, refreshToken) VALUES ($1,$2) RETURNING *`,[userId, refreshToken]);
        // console.log(token)
        // return token.rows[0]
    }

    async removeToken(refreshToken){
        const tokenData = await db.query(`DELETE FROM tokens WHERE refreshtoken = '${refreshToken}' RETURNING *`)

        return tokenData.rows[0];
    }

    async findToken(refreshToken){
        const tokenData = await db.query(`SELECT * FROM tokens WHERE refreshtoken = '${refreshToken}'`)

        return tokenData.rows[0];
    }
}

module.exports = new TokenService()