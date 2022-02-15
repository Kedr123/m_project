const nodemailer = require('nodemailer')

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            // host: process.env.SMPT_HOST,
            port: 587,
            // port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: "m.project.mailing@gmail.com",
                // user: process.env.SMTP_USER,
                pass: "qpwoeiruty1A"
                // pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(email, link) {
        this.transporter.sendMail({
            form: `M_project <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Активация акаунта на " + process.env.API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации пройдите по ссылке</h1>
                        <a href="${link}" >${link}</a>
                    </div>
                `
        })
    }

}

module.exports = new MailService()