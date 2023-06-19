import { HttpClient } from "../HttpClient/httpClient";

class LoginService extends HttpClient {
    constructor(){
        super("https://localhost:7136/api")
    }

   async submitLogin(body:{number:string; password:string}){
    return await this.post("Accounts/Login", body , {});
   }

   async requestRegister(body:{number:string; password:string; confirmPassword:string; fullname:string;}){
    return await this.post("Accounts/register", body,{})
   }

}

export const loginService = new LoginService();