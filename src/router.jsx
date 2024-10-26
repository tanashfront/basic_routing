import {
    createBrowserRouter,
    useParams
  } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import NavLayout from "./NavLayout";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import IdMember from "./pages/IdMember";
import members from './Members.json';

export const router = createBrowserRouter([
    {
      element:<NavLayout/>,
      children:[
        {path:'/', element:<App/>},
        {path:'/about', element:<About/>},
        {path:'/team', children:[
          {index:true, element:<Team/>},
          {path:'joe', element:<TeamMember name={"Joe"}/>},
          {path:':id', element: <IdMember/>}
        ]}
      ]
    }
])