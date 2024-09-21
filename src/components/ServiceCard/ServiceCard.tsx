import styles from "./ServiceCard.module.scss";
import Badge from "../Badge/Badge.tsx";
import {capitalizeFirstLetter} from "../../lib/capitalizeFirstLetter.ts";
import Button from "../Button/Button.tsx";
import {routes} from "../../lib/routes.ts";
import {useNavigate} from "react-router-dom";

const ServiceCard = ({service}: { service: ServiceProps }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.login);
  };

  return (
    <div className={styles.serviceCard}>
      <div className={styles.imageContainer}>
        <img
          src={service.imageUrl}
          alt="Service Image"/>
      </div>
      <div className={styles.infoContainer}>
        <Badge text={capitalizeFirstLetter(service.category)}/>
        <h3>{service.vendor}</h3>
        <h4>{service.representative}</h4>
        <p>{service.address}</p>
        <Button label="Book now" onClick={handleClick}/>
      </div>
    </div>
  );
};

export default ServiceCard;
