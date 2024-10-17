import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../lib/routes";
import { useUserStore } from "../stores/useUserStore";

//Custom hook to check if user is already logged in and if so redirect home.
const useAuthRedirect = () => {
	const { userName, email, accessToken, error, loadUserFromLocalStorage } =
		useUserStore();
	const navigate = useNavigate();

	useEffect(() => {
		// Load user data from local storage if available
		loadUserFromLocalStorage();

		// Redirect to home if user is authenticated
		if (userName && email && accessToken && !error) {
			navigate(routes.home);
		}
	}, [userName, email, accessToken, error, loadUserFromLocalStorage, navigate]);
};

export default useAuthRedirect;
