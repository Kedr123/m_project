import axios from "axios";
import Service from "./Service";

export default class UserService {

    static async show() {
        const response = await axios.get(Service.domain() + 'user/1');
        console.log(response)
        return response.data;
    }

    static async me(token) {
        const response = await axios.post(Service.domain() + 'auth/me',{},{ headers: { Authorization: "Bearer " + token } });
        console.log(response)
        return response;
    }

    static async store(user, avatar) {
        let form = new FormData();

        for (let key in user) {
            form.append(key, user[key]);
        }

        form.append("avatar", avatar);

        const response = await axios.post(Service.domain() + 'reg', form);

        return response.data;
    }

    static async login(user) {
        let form = new FormData();

        for (let key in user) {
            form.append(key, user[key]);
        }

        const response = await axios.post(Service.domain() + 'auth/login', form);
        console.log(response)
        return response;
    }

    static async check(token) {

        const response = await axios.post(Service.domain() + 'auth/check', {}, { headers: { Authorization: "Bearer " + token } });
        console.log(response)
        return response
    }

    static async refresh(token) {

        const response = await axios.post(Service.domain() + 'auth/refresh', {}, { headers: { Authorization: "Bearer " + token } });

        return response
    }


}