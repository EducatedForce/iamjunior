import styles from "./BusinessInfoCard.module.scss";
import Badge from "../../../components/Badge/Badge.tsx";
import Button from "../../../components/Button/Button.tsx";
import { FiUpload } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../lib/routes.ts";
import { slugify } from "../../../lib/slugify.ts";

type BusinessInfoCardProps = {
	business: Business;
	category: Category;
};

const BusinessInfoCard = ({ business, category }: BusinessInfoCardProps) => {
	const navigate = useNavigate();

	const handleBadgeClick = (slug: string) => {
		return () => {
			navigate(slug);
		};
	};

	const handleUploadClick = () => {};

	return (
		<div className={styles.businessInfoCardContainer}>
			<div className={styles.infoContainer}>
				<div className={styles.imageContainer}>
					<img src={business.images[0].url} alt="Service Image" />
				</div>
				<div className={styles.detailsContainer}>
					<Badge
						text={category.name}
						onClick={handleBadgeClick(
							`${routes.search}/${slugify(category ? category.name : "")}`,
						)}
					/>
					<h1>{business.name}</h1>
					<p>{business.address}</p>
					<p>{business.email}</p>
				</div>
			</div>
			<div className={styles.uploadContainer}>
				<Button onClick={handleUploadClick}>
					<FiUpload />
				</Button>
				<div className={styles.contactPerson}>
					<FiUser size={20} />
					<p>{business.contactPerson}</p>
				</div>
			</div>
		</div>
	);
};

export default BusinessInfoCard;
