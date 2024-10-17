import styles from "./User.module.scss";
import { useUserStore } from "../../stores/useUserStore.ts";
import { Link } from "react-router-dom";

import { routes } from "../../lib/routes.ts";
import useNoAuthRedirect from "../../hooks/useNoAuthRedirect.ts";

const User = () => {
	const { userName, email } = useUserStore();
	useNoAuthRedirect();

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
