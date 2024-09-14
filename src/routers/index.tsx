import {createBrowserRouter} from "react-router-dom";
import {routes} from "../lib/routes.ts";
import HomePageLayout from "../layouts/HomePageLayout.tsx";
import Home from "../routes/home/Home.tsx";
import Services from "../routes/Services.tsx";
import AboutUs from "../routes/AboutUs.tsx";
import LoginPageLayout from "../layouts/LoginPageLayout.tsx";
import Login from "../routes/Login.tsx";
import SignUp from "../routes/SignUp.tsx";

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
