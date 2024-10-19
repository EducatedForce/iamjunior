import styles from "./BookingCard.module.scss";

type BookingCardProps = {
	categoryName: string;
	businessName: string;
	date: Date;
	time: string;
	status: string;
};

const BookingCard = ({
	categoryName,
	businessName,
	date,
	time,
	status,
}: BookingCardProps) => {
	return (
		<div className={styles.bookingCardContainer}>
			<h3>{categoryName}</h3>
			<div className={styles.bookingInfoContainer}>
				<p>{businessName}</p>
				<p>
					{new Date(date).toLocaleString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
				<p>{time}</p>
				<p>{status}</p>
			</div>
		</div>
	);
};

export default BookingCard;
