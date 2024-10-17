import styles from "./User.module.scss";
import { useUserStore } from "../../stores/useUserStore.ts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { routes } from "../../lib/routes.ts";

const User = () => {
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

	return (
		<main className={styles.userContainer}>
			<div className={styles.userCard}>
				<h2>{userName}</h2>
				<p>{email}</p>
				<Link to={routes.userBookings}>My bookings</Link>
			</div>
		</main>
	);
};

export default User;
