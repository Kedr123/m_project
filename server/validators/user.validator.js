const validator = require("validator")

class UserValidator{
    add(payload) {
        let errors = {};
        errors = {...errors,...this.isExists(payload.name, "name")}
        errors = {...errors,...this.isExists(payload.surname, "surname")}
        errors = {...errors,...this.isExists(payload.birthday, "birthday")}
        errors = {...errors,...this.isExists(payload.password, "password")}
        errors = {...errors,...this.isExists(payload.email, "email")}

        return {errors};
    }

    isExists(value, inputName){
        if(!value){
            return { [inputName] : `Это поле обязательно к заполнению`}
        }
    }
}

module.exports = new UserValidator();