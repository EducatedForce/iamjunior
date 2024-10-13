import styles from "./TopBar.module.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../lib/routes.ts";
import Button from "../Button/Button.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import { useEffect, useState } from "react";
import { useUserStore } from "../../stores/useUserStore.ts";

const TopBar = () => {
	const navigate = useNavigate();
	const { userName, email, accessToken, logout } = useUserStore();
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (userName && email && accessToken) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, [accessToken, email, userName]);

	const handleClick = () => {
		if (loggedIn) {
			logout();
		} else {
			navigate(routes.login);
		}
	};
	return (
		<header className={styles.header}>
			<NavBar />
			<div className={styles.loginButton}>
				{loggedIn && <p>{userName}</p>}
				<Button onClick={handleClick}>
					{loggedIn ? "Logout" : "Login / Sign up"}
				</Button>
			</div>
		</header>
	);
};

export default TopBar;
