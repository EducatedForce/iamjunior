import { Dispatch, useEffect, useRef, useState } from "react";
import styles from "./DropDownMenu.module.scss";

import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore.ts";
import { routes } from "../../lib/routes.ts";

type DropDownMenuProps = {
	toggleDropDown: Dispatch<boolean>;
	toggleMenu: boolean;
};

const DropDownMenu = ({ toggleMenu, toggleDropDown }: DropDownMenuProps) => {
	const [className, setClassName] = useState<string>(styles.containerClosed);
	const { logout } = useUserStore();
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (toggleMenu) {
			setClassName(styles.containerOpen);
		} else {
			setClassName(styles.containerClosed);
		}
	}, [toggleMenu]);

	// Detect click outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// If the click is outside the dropdownRef element, close the dropdown
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				toggleDropDown(false);
			}
		};

		// Add event listener for clicks
		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup the event listener on unmount
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, toggleDropDown]);

	const handleLinkClick = (url: string) => {
		toggleDropDown(false);
		navigate(url);
	};

	const handleMyAccountClick = () => {
		return handleLinkClick(routes.user);
	};

	const handleBookingsClick = () => {
		return handleLinkClick(routes.userBookings);
	};

	const handleLogout = () => {
		return logout();
	};

	return (
		<div
			ref={dropdownRef}
			className={`${styles.dropDownContainer} ${className}`}
		>
			<div className={styles.account}>
				<p className={styles.menuLink} onClick={handleMyAccountClick}>
					My Account
				</p>
			</div>
			<div className={styles.otherLinks}>
				<p className={styles.menuLink} onClick={handleBookingsClick}>
					My Bookings
				</p>
				<p onClick={handleLogout} className={styles.menuLink}>
					Logout
				</p>
			</div>
		</div>
	);
};

export default DropDownMenu;
