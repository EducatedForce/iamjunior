import React from "react";
import styles from "./SideModal.module.scss";
import Button from "../../../components/Button/Button.tsx";

type SideModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	closeOverlay: () => void;
};

const SideModal = ({ isOpen, closeModal, closeOverlay }: SideModalProps) => {
	const handleModalClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const handleCloseModal = () => {
		closeModal();
		setTimeout(() => {
			closeOverlay();
		}, 400);
	};
	return (
		<div
			className={`${styles.modal} ${isOpen ? styles.open : styles.closed}`}
			onClick={handleModalClick}
		>
			<Button onClick={handleCloseModal}>Close Modal</Button>
		</div>
	);
};

export default SideModal;
