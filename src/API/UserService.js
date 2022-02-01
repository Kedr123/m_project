import axios from "axios";

export default class UserService{
    static async show(){
        const response = await axios.get('http://m-project-api/public/api/user/1');
        console.log(response)
        return response.data;
    }
}