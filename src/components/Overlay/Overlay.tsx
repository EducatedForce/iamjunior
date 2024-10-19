import React from "react";
import ReactDOM from "react-dom";
import styles from "./Overlay.module.scss";

type OverlayProps = {
	children: React.ReactNode;
	closeOverlay: () => void;
	closeModal: () => void;
	isOpen: boolean;
};

const Overlay = ({
	isOpen,
	closeOverlay,
	closeModal,
	children,
}: OverlayProps) => {
	const handleOverlayClick = () => {
		closeModal();
		setTimeout(() => {
			closeOverlay();
		}, 400);
	};

	if (isOpen) {
		return ReactDOM.createPortal(
			<div className={styles.overlay} onClick={handleOverlayClick}>
				{children}
			</div>,
			document.getElementById("overlay")!,
		);
	} else {
		return null;
	}
};

export default Overlay;
