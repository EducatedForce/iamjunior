import styles from "./BusinessUpload.module.scss";
import Button from "../../../components/Button/Button.tsx";
import { FiUpload, FiUser } from "react-icons/fi";

type BusinessUploadProps = {
	business: Business;
};

const BusinessUpload = ({ business }: BusinessUploadProps) => {
	const handleUploadClick = () => {};

	return (
		<div className={styles.uploadContainer}>
			<Button onClick={handleUploadClick}>
				<FiUpload />
			</Button>
			<div className={styles.contactPerson}>
				<FiUser size={20} />
				<p>{business.contactPerson}</p>
			</div>
		</div>
	);
};

export default BusinessUpload;
