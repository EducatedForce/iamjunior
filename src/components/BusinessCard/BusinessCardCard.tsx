import styles from "./BusinessCard.module.scss";
import Badge from "../Badge/Badge.tsx";
import { capitalizeFirstLetter } from "../../lib/capitalizeFirstLetter.ts";
import Button from "../Button/Button.tsx";
import { routes } from "../../lib/routes.ts";
import { useNavigate } from "react-router-dom";
import HeartCheckBox from "../HeartCheckBox/HeartCheckBox.tsx";
import { slugify } from "../../lib/slugify.ts";
import { useFetch } from "../../hooks/useFetch.ts";
import { apiRoutes } from "../../lib/apiRoutes.ts";

const BusinessCardCard = ({
	service,
	favorite,
	setValue,
}: {
	service: BusinessCardProps;
	favorite: boolean;
	setValue: (value: string[] | ((val: string[]) => string[])) => void;
}) => {
	const navigate = useNavigate();

	const result = useFetch(`${apiRoutes.categories}/${service.categoryId}`);
	const category = result?.data as Category;

	const handleClick = () => {
		navigate(routes.login);
	};

	const handleBadgeClick = (slug: string) => {
		return () => {
			navigate(slug);
		};
	};

	return (
		<div className={styles.serviceCard}>
			<div className={styles.imageContainer}>
				<img src={service?.images[0].url} alt="Service Image" />
			</div>
			<div className={styles.infoContainer}>
				<div className={styles.topContent}>
					<Badge
						text={capitalizeFirstLetter(category ? category.name : "")}
						onClick={handleBadgeClick(
							`${routes.search}/${slugify(category ? category.name : "")}`,
						)}
					/>
					<HeartCheckBox
						checkBoxId={`${service?._id}`}
						checked={favorite}
						setValue={setValue}
					/>
				</div>
				<h3>{service.name}</h3>
				<h4>{service.contactPerson}</h4>
				<p>{service.address}</p>
				<Button onClick={handleClick}>Book now</Button>
			</div>
		</div>
	);
};

export default BusinessCardCard;
