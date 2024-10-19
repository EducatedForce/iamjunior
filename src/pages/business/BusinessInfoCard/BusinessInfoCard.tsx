import styles from "./BusinessInfoCard.module.scss";
import Badge from "../../../components/Badge/Badge.tsx";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../lib/routes.ts";
import { slugify } from "../../../lib/slugify.ts";

type BusinessInfoCardProps = {
	variant: "primary" | "secondary";
	business: Business;
	category: Category;
};

const BusinessInfoCard = ({
	variant,
	business,
	category,
}: BusinessInfoCardProps) => {
	const navigate = useNavigate();

	const handleBadgeClick = (slug: string) => {
		return () => {
			navigate(slug);
		};
	};

	return (
		<div className={styles.infoContainer}>
			<div
				className={`${styles.imageContainer} ${
					variant === "primary" ? styles.primary : styles.secondary
				}`}
			>
				<img src={business.images[0].url} alt="Service Image" />
			</div>
			<div className={styles.detailsContainer}>
				{variant === "primary" && (
					<Badge
						text={category.name}
						onClick={handleBadgeClick(
							`${routes.search}/${slugify(category ? category.name : "")}`,
						)}
					/>
				)}
				<h1
					className={`${
						variant === "primary"
							? styles.primaryHeading
							: styles.secondaryHeading
					}`}
				>
					{business.name}
				</h1>
				<div className={styles.flexRow}>
					{variant === "primary" && <SlLocationPin className={styles.icon} />}
					<p>{business.address}</p>
				</div>
				<div className={styles.flexRow}>
					{variant === "primary" && (
						<HiOutlineEnvelope className={styles.icon} />
					)}
					<p>{business.email}</p>
				</div>
			</div>
		</div>
	);
};

export default BusinessInfoCard;
