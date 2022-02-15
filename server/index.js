require('dotenv').config()
const express = require("express")
const cookieParser = require("cookie-parser")
const userRouter = require("./routes/user.routes")
const authRouter = require("./routes/auth.routes")
const PORT = process.env.PORT || 5000
const errorMiddleware = require("./middlewares/error.middleware")


const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(`/api`, userRouter);
app.use(`/api`, authRouter);

app.use(errorMiddleware)

const start = async () => {
    try {
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()

