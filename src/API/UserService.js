import axios from "axios";

export default class UserService{

    static async show(){
        const response = await axios.get('http://m-project-api/public/api/user/1');
        console.log(response)
        return response.data;
    }

    static async store(user, avatar){

        console.log(avatar)

        let form = new FormData();

        for (let key in user) {
            form.append(key , user[key]);
        }
        form.append("avatar" , avatar);

        console.log("avatar")
        const response = await  axios.post('http://m-project-api/api/reg', form );
        console.log(response.data)
        return response;
    }
}