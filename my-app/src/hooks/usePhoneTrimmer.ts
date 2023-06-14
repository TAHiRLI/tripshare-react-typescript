 export default function usePhoneTrimmer(){
        return (phone:string)=>{
            let result = phone
            .replaceAll("-","")
            .replaceAll(" ","")
            .replaceAll("(","")
            .replaceAll(")","")
            .replace("+994","")
    
            if(result.length ===9)
            result = "0"+ result;

            return result
        }
 }