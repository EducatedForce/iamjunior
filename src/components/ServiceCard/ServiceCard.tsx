import styles from "./ServiceCard.module.scss";
import Badge from "../Badge/Badge.tsx";

const ServiceCard = ({service}: { service: ServiceProps }) => {

  return (
    <div className={styles.serviceCard}>
      <div className={styles.imageContainer}>
        <img
          src={service.imageUrl}
          alt="Service Image"/>
      </div>
      <div className={styles.infoContainer}>
        <Badge text={service.category}/>
        <p>{service.vendor}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
