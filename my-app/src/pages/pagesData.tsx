import Dropdown from "../components/Dropdown";
import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";
import SearchPage from "./Search";

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
}
];

export default pagesData;