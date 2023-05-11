import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";

const pagesData:routerType[] =[
{
    title:"homePage",
    path:"home",
    element: <Home />
},
{
    title:"aboutPage",
    path:"about",
    element: <About/>
}
];

export default pagesData;