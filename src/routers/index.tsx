import {createBrowserRouter} from "react-router-dom";
import {routes} from "../lib/routes.ts";
import HomePageLayout from "../layouts/HomePageLayout.tsx";
import Home from "../pages/home/Home.tsx";
import Services from "../pages/services/Services.tsx";
import AboutUs from "../pages/aboutus/AboutUs.tsx";
import LoginPageLayout from "../layouts/LoginPageLayout.tsx";
import Login from "../pages/login/Login.tsx";
import SignUp from "../pages/SignUp.tsx";
import Search from "../pages/search/Search.tsx";

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
      },
      {
        path: `${routes.search}/:category`,
        element: <Search/>,
      },
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
