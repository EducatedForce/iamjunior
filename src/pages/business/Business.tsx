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

const Business = () => {
	const { businessId } = useParams<{ businessId: string }>();

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

	return (
		<div className={styles.businessContainer}>
			{business && category && (
				<>
					<BusinessInfoCard business={business} category={category} />
					<div className={styles.content}>
						<div className={styles.contentLeft}>
							<BusinessDescription business={business} />
							<BusinessImagesGallery business={business} />
						</div>
						<div className={styles.contentRight}>
							<Button>
								<FaRegCalendarAlt />
								&nbsp; Book appointment
							</Button>
						</div>
					</div>
				</>
			)}
			{businessError?.message ||
				(categoryError?.message && (
					<h2>Error retrieving Service information</h2>
				))}
			{businessIsLoading || (categoryIsLoading && <Loader />)}
		</div>
	);
};

export default Business;
