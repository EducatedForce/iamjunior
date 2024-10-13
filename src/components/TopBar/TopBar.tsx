import styles from "./TopBar.module.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../lib/routes.ts";
import Button from "../Button/Button.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import { useEffect, useState } from "react";
import { useUserStore } from "../../stores/useUserStore.ts";
import Avatar from "../Avatar/Avatar.tsx";
import DropDownMenu from "../DropDownMenu/DropDownMenu.tsx";

const TopBar = () => {
	const navigate = useNavigate();
	const { userName, email, accessToken, loadUserFromLocalStorage } =
		useUserStore();
	const [loggedIn, setLoggedIn] = useState(false);
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);

	useEffect(() => {
		loadUserFromLocalStorage();
		if (userName && email && accessToken) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, [userName, email, accessToken, loadUserFromLocalStorage]);

	const handleAvatarClick = () => {
		setToggleMenu(!toggleMenu);
	};

	const handleLoginClick = () => {
		navigate(routes.login);
	};
	return (
		<header className={styles.header}>
			<NavBar />
			<div className={styles.authMenu}>
				{loggedIn ? (
					<div>
						<Avatar onClick={handleAvatarClick}>{userName.slice(0, 2)}</Avatar>
						<DropDownMenu toggleMenu={toggleMenu} />
					</div>
				) : (
					<Button onClick={handleLoginClick}>Login / Sign up</Button>
				)}
			</div>
		</header>
	);
};

export default TopBar;
