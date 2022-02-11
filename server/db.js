const Pool = require("pg").Pool

const pool = new Pool({

    user: "postgres",
    password: "2033",
    host: "localhost",
    port: 5432,
    database: "m_project"
})


module.exports = pool
