import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "./SideModal.module.scss";
import Button from "../../../components/Button/Button.tsx";

type SideModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	closeOverlay: () => void;
	businessId?: string | number | undefined;
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const SideModal = ({
	isOpen,
	closeModal,
	closeOverlay,
	businessId,
}: SideModalProps) => {
	const [date, setDate] = useState<Value>(new Date());
	const [selectedTile, setSelectedTile] = useState<Date | null>(null);

	const handleModalClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const handleBookAppointment = () => {
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
			<h2>Book a Service</h2>
			<p>Select Date and Time slot for service</p>
			<div className={styles.calendar}>
				<Calendar
					onChange={setDate}
					value={date}
					onClickDay={(value) => setSelectedTile(value)}
					tileClassName={({ view, date }) => {
						console.log(
							view === "month" && date.getDate() === selectedTile?.getDate()
								? styles.tileActive
								: "No date",
						);
						return view === "month" &&
							date.getDate() === selectedTile?.getDate() &&
							date.getMonth() === selectedTile?.getMonth()
							? styles.tileActive
							: "";
					}}
				/>
			</div>
			<Button onClick={handleBookAppointment}>Close Modal</Button>
		</div>
	);
};

export default SideModal;
