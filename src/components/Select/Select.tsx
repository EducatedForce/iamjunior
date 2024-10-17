import { Dispatch, useState } from "react";
import styles from "./Select.module.scss";
import { BookingFilter } from "../../pages/userBookings/UserBookings.tsx";

type SelectProps = {
	changeBookingStatus: Dispatch<BookingFilter>;
};

type SelectStatus =
	| { booked: true; completed: false }
	| { booked: false; completed: true };

const Select = ({ changeBookingStatus }: SelectProps) => {
	const [active, setActive] = useState<SelectStatus>({
		booked: true,
		completed: false,
	});

	const handleBookedClick = () => {
		setActive({
			booked: true,
			completed: false,
		});
		changeBookingStatus("Booked");
	};

	const handleCompletedClick = () => {
		setActive({
			booked: false,
			completed: true,
		});
		changeBookingStatus("Completed");
	};
	return (
		<div className={styles.selectContainer}>
			<span
				onClick={handleBookedClick}
				className={`${active.booked ? styles.active : null}`}
			>
				Booked
			</span>
			<span
				onClick={handleCompletedClick}
				className={`${active.completed ? styles.active : null}`}
			>
				Completed
			</span>
		</div>
	);
};

export default Select;
