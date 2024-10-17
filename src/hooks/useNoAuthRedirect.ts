import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../lib/routes";
import { useUserStore } from "../stores/useUserStore";

//Custom hook to check if user is not logged in and if so redirect to login page
const useNoAuthRedirect = () => {
	const { userName, email, accessToken, loadUserFromLocalStorage } =
		useUserStore();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// Load user data from local storage if available
		loadUserFromLocalStorage();

		// Redirect to login page if user is not authenticated
		if (!userName || !email || !accessToken) {
			navigate(routes.login, { replace: true, state: { next: location } });
		}
	}, [
		userName,
		email,
		accessToken,
		loadUserFromLocalStorage,
		navigate,
		location,
	]);
};
export default useNoAuthRedirect;
