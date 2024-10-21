import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "./SideModal.module.scss";
import Button from "../../../components/Button/Button.tsx";
import { apiRoutes } from "../../../lib/apiRoutes.ts";
import { useUserStore } from "../../../stores/useUserStore.ts";
import { usePost } from "../../../hooks/usePost.ts";

type SideModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	closeOverlay: () => void;
	businessId?: string | number | undefined;
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type BookingResponse = {
	message: string;
	data: Booking;
};

const TIME_SLOTS = [
	"10:00",
	"10:30",
	"11:00",
	"11:30",
	"12:00",
	"12:30",
	"13:00",
	"13:30",
	"14:00",
	"14:30",
	"15:00",
	"15:30",
	"16:00",
	"16:30",
];

const SideModal = ({
	isOpen,
	closeModal,
	closeOverlay,
	businessId,
}: SideModalProps) => {
	const [date, setDate] = useState<Value>(new Date());
	const [selectedTile, setSelectedTile] = useState<Date | null>(new Date());
	const [selectedTimeSlot, setSelectedTimeSlot] = useState<number>(0);
	const [error, setError] = useState<string>("");
	const [success, setSuccess] = useState("");
	const { userName, email } = useUserStore();

	const { mutate: bookAppointment } = usePost<BookingResponse, Booking>(
		`${apiRoutes.bookings}`,
		{ headers: { "Content-Type": "application/json" } },
	);

	const handleModalClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const handleBookAppointment = () => {
		if (!selectedTile) {
			setError("No date selected");
			return;
		}

		if (selectedTimeSlot != 0 && isNaN(selectedTimeSlot)) {
			setError("No time slot selected");
			return;
		}

		bookAppointment(
			{
				businessId: businessId!,
				date: selectedTile,
				time: TIME_SLOTS[selectedTimeSlot],
				userEmail: email,
				userName: userName,
				status: "Pending",
			},
			{
				onSuccess: () => {
					setSuccess("The service is successfully booked!");
					setTimeout(() => {
						closeModal();
						setTimeout(() => {
							closeOverlay();
						}, 400);
					}, 1000);
				},
				onError: () => {
					setError("Unable to book a service");
				},
			},
		);
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
						return view === "month" &&
							date.getDate() === selectedTile?.getDate() &&
							date.getMonth() === selectedTile?.getMonth()
							? styles.tileActive
							: "";
					}}
				/>
			</div>
			<div className={styles.timeSlots}>
				{TIME_SLOTS.map((slot, index) => (
					<span
						key={`slot-${index}`}
						className={selectedTimeSlot === index ? styles.active : ""}
						onClick={() => setSelectedTimeSlot(index)}
					>
						{slot}
					</span>
				))}
			</div>
			<div className={styles.messages}>
				{error && <p className={styles.error}>{error}</p>}
				{success && <p className={styles.success}>{success}</p>}
			</div>
			<Button onClick={handleBookAppointment}>Book Appointment</Button>
		</div>
	);
};

export default SideModal;
