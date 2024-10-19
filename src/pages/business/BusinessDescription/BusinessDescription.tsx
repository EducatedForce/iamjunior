import styles from "./BusinessDescription.module.scss";

type BusinessDescriptionProps = {
	business: Business;
};

const BusinessDescription = ({ business }: BusinessDescriptionProps) => {
	return (
		<div className={styles.businessDescription}>
			<h2>Description</h2>
			<p>{business.description}</p>
		</div>
	);
};

export default BusinessDescription;
