import { HttpClient } from "../HttpClient/httpClient";

class LoginService extends HttpClient {
    constructor(){
        super("https://localhost:7136/api")
    }

   async submitLogin(body:object){
    return await this.post("Accounts/Login", body , {});
   }

   async requestRegister(body:object){
    return await this.post("Accounts/register", body,{})
   }

}

export const loginService = new LoginService();