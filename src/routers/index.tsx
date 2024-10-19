import { createBrowserRouter } from "react-router-dom";
import { routes } from "../lib/routes.ts";
import HomePageLayout from "../layouts/HomePageLayout.tsx";
import Home from "../pages/home/Home.tsx";
import Businesses from "../pages/businesses/Businesses.tsx";
import AboutUs from "../pages/aboutus/AboutUs.tsx";
import LoginPageLayout from "../layouts/LoginPageLayout.tsx";
import Login from "../pages/login/Login.tsx";
import SignUp from "../pages/signup/SignUp.tsx";
import Search from "../pages/search/Search.tsx";
import User from "../pages/user/User.tsx";
import UserBookings from "../pages/userBookings/UserBookings.tsx";
import Business from "../pages/business/Business.tsx";

export const router = createBrowserRouter([
	{
		element: <HomePageLayout />,
		children: [
			{
				path: routes.home,
				element: <Home />,
			},
			{
				path: routes.businesses,
				element: <Businesses />,
			},
			{
				path: `${routes.businesses}/:businessId`,
				element: <Business />,
			},
			{
				path: routes.about,
				element: <AboutUs />,
			},
			{
				path: `${routes.search}/:category`,
				element: <Search />,
			},
			{
				path: routes.user,
				element: <User />,
			},
			{
				path: routes.userBookings,
				element: <UserBookings />,
			},
		],
	},
	{
		element: <LoginPageLayout />,
		children: [
			{
				path: routes.login,
				element: <Login />,
			},
			{
				path: routes.signup,
				element: <SignUp />,
			},
		],
	},
]);
