import { HttpClient } from "../HttpClient/httpClient";

class LoginService extends HttpClient {
    constructor(){
        super("https://localhost:7136/api")
    }

   async submitLogin(body:object){
    return this.post("Accounts/Login", body , {});
   }

}

export const loginService = new LoginService();