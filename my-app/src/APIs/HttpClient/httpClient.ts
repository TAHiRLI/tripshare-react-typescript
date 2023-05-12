import axios from "axios";

export class HttpClient{
    private baseUrl:string;
    constructor(url:string){
      this.baseUrl = url; 
    }

    async get(endpoint:string, config?:object){
        return await axios.get(`${this.baseUrl}/${endpoint}`,config)
    }

    async post(endpoint:string, body:object, config?:object){
        return await axios.post(`${this.baseUrl}/${endpoint}`,body, config)
    }
    async put(endpoint:string, body:object, config?:object){
        return await axios.put(`${this.baseUrl}/${endpoint}`, body, config)
    }
    async delete(endpoint:string, id:number, config?:object){

    }

}