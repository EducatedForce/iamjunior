import styles from "./UserBookings.module.css";
import Select from "../../components/Select/Select.tsx";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch.ts";
import { apiRoutes } from "../../lib/apiRoutes.ts";
import { useUserStore } from "../../stores/useUserStore.ts";
import useNoAuthRedirect from "../../hooks/useNoAuthRedirect.ts";
import Loader from "../../components/Loader/Loader.tsx";
import BookingCard from "../../components/BookingCard/BookingCard.tsx";

export type BookingFilter = "Booked" | "Completed";

const UserBookings = () => {
	const [bookingFilter, setBookingFilter] = useState<BookingFilter>("Booked");
	const [bookings, setBookings] = useState<Booking[] | undefined>([]);
	useNoAuthRedirect();

	const { userName, email } = useUserStore();

	const { data: fetchedBookings, isLoading } = useFetch<Booking[]>(
		email ? `${apiRoutes.bookings}/${email}` : "",
	);

	useEffect(() => {
		if (
			bookingFilter === "Booked" &&
			fetchedBookings &&
			fetchedBookings.length > 0
		) {
			setBookings(fetchedBookings);
		} else if (
			bookingFilter === "Completed" &&
			fetchedBookings &&
			fetchedBookings.length > 0
		) {
			const filteredBookings = fetchedBookings.filter(
				(booking) =>
					booking.status.trim().toLowerCase() ===
					bookingFilter.trim().toLowerCase(),
			);
			setBookings(filteredBookings);
		} else {
			setBookings([]);
		}
	}, [bookingFilter, fetchedBookings]);

	return (
		<div className={styles.userBookingsContainer}>
			<h2>My Bookings</h2>
			<Select changeBookingStatus={setBookingFilter} />

			{bookings && bookings?.length > 0 ? (
				<div className={styles.bookingCardsContainer}>
					{bookings?.map((booking) => (
						<BookingCard
							key={booking._id}
							categoryName={booking.categoryName}
							businessName={booking.businessName}
							date={booking.date}
							time={booking.time}
							status={booking.status}
						/>
					))}
				</div>
			) : isLoading ? null : (
				<h3>
					No {bookingFilter === "Booked" ? "bookings" : "completed bookings"}{" "}
					found for {userName}
				</h3>
			)}
			{isLoading && <Loader />}
		</div>
	);
};

export default UserBookings;
