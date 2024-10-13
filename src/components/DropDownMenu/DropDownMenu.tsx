import { useEffect, useState } from "react";
import styles from "./DropDownMenu.module.scss";

import { Link } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore.ts";
import { routes } from "../../lib/routes.ts";

type DropDownMenuProps = {
	toggleMenu: boolean;
};

const DropDownMenu = ({ toggleMenu }: DropDownMenuProps) => {
	const [className, setClassName] = useState<string>(styles.containerClosed);
	const { logout } = useUserStore();

	useEffect(() => {
		if (toggleMenu) {
			setClassName(styles.containerOpen);
		} else {
			setClassName(styles.containerClosed);
		}
	}, [toggleMenu]);

	const handleLogout = () => {
		return logout();
	};

	return (
		<div className={`${styles.dropDownContainer} ${className}`}>
			<div className={styles.account}>
				<Link className={styles.menuLink} to={routes.user}>
					My Account
				</Link>
			</div>
			<div className={styles.otherLinks}>
				<Link className={styles.menuLink} to={routes.userBookings}>
					My Bookings
				</Link>
				<p onClick={handleLogout} className={styles.menuLink}>
					Logout
				</p>
			</div>
		</div>
	);
};

export default DropDownMenu;
