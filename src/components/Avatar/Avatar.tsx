import React from "react";
import styles from "./Avatar.module.scss";

type AvatarProps = {
	children?: React.ReactNode;
	onClick?: () => void;
};

const Avatar = ({ children, onClick }: AvatarProps) => {
	return (
		<div className={styles.avatarContainer} onClick={onClick}>
			{children}
		</div>
	);
};

export default Avatar;
