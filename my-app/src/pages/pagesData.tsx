import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";

const pagesData:routerType[] =[
{
    title:"salam",
    path:"",
    element: <Home content={<About/>}/>
}
];

export default pagesData;