import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";
import Login from "./Auth/components/Login";
import SearchPage from "./Search";
import AuthPage from "./Auth";

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
},
{
    title:"SearchPage",
    path:"search",
    element:<SearchPage/>
},
{
    title:"Auth Page",
    path:"Authentication",
    element: <AuthPage/>
}

];

export default pagesData;