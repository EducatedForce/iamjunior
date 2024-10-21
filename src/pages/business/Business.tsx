import styles from "./Business.module.scss";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.ts";
import { apiRoutes } from "../../lib/apiRoutes.ts";
import Loader from "../../components/Loader/Loader.tsx";
import BusinessInfoCard from "./BusinessInfoCard/BusinessInfoCard.tsx";
import BusinessDescription from "./BusinessDescription/BusinessDescription.tsx";
import BusinessImagesGallery from "./BusinessImagesGallery/BusinessImagesGallery.tsx";
import Button from "../../components/Button/Button.tsx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { slugify } from "../../lib/slugify.ts";
import BusinessUpload from "./BusinessUpload/BusinessUpload.tsx";
import { FetchedBusinesses } from "../search/Search.tsx";
import { useSideModalStore } from "../../stores/useSideModalStore.ts";
import Overlay from "../../components/Overlay/Overlay.tsx";
import SideModal from "./SideModal/SideModal.tsx";

const Business = () => {
	const { businessId } = useParams<{ businessId: string }>();
	const {
		isOverlayOpen,
		isModalOpen,
		openModal,
		closeModal,
		openOverlay,
		closeOverlay,
	} = useSideModalStore();

	const {
		data: business,
		isLoading: businessIsLoading,
		error: businessError,
	} = useFetch<Business>(`${apiRoutes.businesses}/${businessId}`);
	const {
		data: category,
		isLoading: categoryIsLoading,
		error: categoryError,
	} = useFetch<Category>(
		business ? `${apiRoutes.categories}/${business.category}` : null,
	);

	const { data: businessesFetchResult, isLoading: isBusinessesLoading } =
		useFetch<FetchedBusinesses>(
			category
				? `${apiRoutes.businessesByCategory}/${slugify(category.name)}`
				: null,
		);

	const handleBookingButtonClick = () => {
		openOverlay();
		openModal();
	};

	return (
		<div className={styles.businessContainer}>
			{business && category && (
				<>
					<div className={styles.contentTop}>
						<BusinessInfoCard
							variant="primary"
							business={business}
							category={category}
						/>
						<BusinessUpload business={business} />
					</div>
					<div className={styles.contentBottom}>
						<div className={styles.gridDescription}>
							<BusinessDescription business={business} />
						</div>
						<div className={styles.gridGallery}>
							<BusinessImagesGallery business={business} />
						</div>
						<div className={styles.gridBooking}>
							<Button onClick={handleBookingButtonClick}>
								<FaRegCalendarAlt />
								&nbsp; Book appointment
							</Button>
						</div>
						<div className={styles.gridSimilar}>
							<h2>Similar Businesses</h2>
							{businessesFetchResult?.businesses &&
							businessesFetchResult.businesses.length > 0 ? (
								businessesFetchResult.businesses.map((b) => {
									if (b._id !== business._id) {
										return (
											<BusinessInfoCard
												key={b._id}
												variant="secondary"
												business={b}
												category={category}
											/>
										);
									}
								})
							) : (
								<p>No similar businesses found</p>
							)}
							{isBusinessesLoading && <Loader />}
						</div>
					</div>
				</>
			)}
			{businessError?.message ||
				(categoryError?.message && (
					<h2>Error retrieving Service information</h2>
				))}
			{businessIsLoading || (categoryIsLoading && <Loader />)}
			<Overlay
				isOpen={isOverlayOpen}
				closeOverlay={closeOverlay}
				closeModal={closeModal}
			>
				<SideModal
					isOpen={isModalOpen}
					closeOverlay={closeOverlay}
					closeModal={closeModal}
					businessId={business?._id}
				/>
			</Overlay>
		</div>
	);
};

export default Business;
