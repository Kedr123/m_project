

class UserController {
    async creatorUser(req, res) {
        try {
            // const {name, surname, birthday, password, email, avatar} = req.body;
            // const userData = await userS
        } catch (e) {

        }
        // const {name, surname, birthday, isActivated, setActive, password, email} = req.body
        // const newUser = await db.query(`INSERT INTO (name, surname, birthday, isActivated, setActive, password, email) 
        //                                 VALUES ($1, $2, $3, $4, $5, $6, $7)`, [name, surname, birthday, isActivated, setActive, password, email])
    }

    async getUsers(req, res) {
        try {
            res.json(["sds","234"]);
        } catch (e) {

        }
    }

    async getOneUser(req, res) {
        try {

        } catch (e) {

        }
    }

    async updateUser(req, res) {
        try {

        } catch (e) {

        }
    }

    async deleteUser(req, res) {
        try {

        } catch (e) {

        }
    }
}

module.exports = new UserController()