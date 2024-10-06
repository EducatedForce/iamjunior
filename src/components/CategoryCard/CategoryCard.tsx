import styles from "./CategoryCard.module.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../lib/routes.ts";
import { slugify } from "../../lib/slugify.ts";

const CategoryCard = ({
	iconUrl,
	name,
	backgroundColor,
	type = "primary",
	active = false,
}: CategoryCardProps) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`${routes.search}/${slugify(name)}`);
	};

	return (
		<div
			className={
				type === "primary"
					? `${styles.categoryCard} ${styles.primary}`
					: `${styles.categoryCard} ${styles.secondary} ${active && styles.active}`
			}
			onClick={handleClick}
		>
			<div className={styles.icon} style={{ color: backgroundColor }}>
				<img src={iconUrl} alt={`${name} icon`} />
			</div>
			<p>{name}</p>
			<div className={styles.overlay} />
		</div>
	);
};

export default CategoryCard;
