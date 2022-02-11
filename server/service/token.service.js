const jwt = require("jsonwebtoken")
const db = require("./../db")

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30m"})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"})

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken){
        const token = db.query(`INSERT INTO tokens (user_id, refreshToken) VALUE ($1,$2) RETURNING *`,[userId, refreshToken]);
        console.log(token)
        // return token.rows[0]
    }
}

module.exports = new TokenService()