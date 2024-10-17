import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../lib/routes";
import { useUserStore } from "../stores/useUserStore";

//Custom hook to check if user is already logged in and if so redirect home.
const useAuthRedirect = () => {
	const { userName, email, accessToken, error, loadUserFromLocalStorage } =
		useUserStore();
	const navigate = useNavigate();
	const { state: locationState } = useLocation();

	useEffect(() => {
		// Load user data from local storage if available
		loadUserFromLocalStorage();

		// If user is authenticated redirect to previous page or home page
		if (userName && email && accessToken && !error) {
			const path = locationState?.next;
			if (path) {
				navigate(`${path.pathname}${path.search}`);
			} else {
				navigate(routes.home);
			}
		}
	}, [
		userName,
		email,
		accessToken,
		error,
		loadUserFromLocalStorage,
		navigate,
		locationState,
	]);
};

export default useAuthRedirect;
