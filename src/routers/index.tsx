import {createBrowserRouter} from "react-router-dom";
import {routes} from "../lib/routes.ts";
import HomePageLayout from "../layouts/HomePageLayout.tsx";
import Home from "../pages/home/Home.tsx";
import Services from "../pages/Services.tsx";
import AboutUs from "../pages/AboutUs.tsx";
import LoginPageLayout from "../layouts/LoginPageLayout.tsx";
import Login from "../pages/Login.tsx";
import SignUp from "../pages/SignUp.tsx";

export const router = createBrowserRouter([
  {
    element: <HomePageLayout/>,
    children: [
      {
        path: routes.home,
        element: <Home/>,
      },
      {
        path: routes.services,
        element: <Services/>,
      },
      {
        path: routes.about,
        element: <AboutUs/>,
      }
    ]
  },
  {
    element: <LoginPageLayout/>,
    children: [
      {
        path: routes.login,
        element: <Login/>,
      },
      {
        path: routes.signup,
        element: <SignUp/>,
      },
    ]
  }
]);
