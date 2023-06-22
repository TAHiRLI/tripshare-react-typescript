import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";
import SearchPage from "./Search";
import AuthPage from "./Auth";
import CreateTrip from "./CreateTrip";

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
},
{
    title:"Trip create Page",
    path:"Create-Trip",
    element: <CreateTrip/>
}

];

export default pagesData;