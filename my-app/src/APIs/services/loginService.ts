import { HttpClient } from "../HttpClient/httpClient";

class LoginService extends HttpClient {
    constructor(){
        super("https//:localhost.myWebsite.org")
    }

   async submitLogin(body:object){
    return this.post("account", body , {});
   }

}

export const loginService = new LoginService();