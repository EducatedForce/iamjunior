import styles from "./ServiceCard.module.scss";
import Badge from "../Badge/Badge.tsx";
import {capitalizeFirstLetter} from "../../lib/capitalizeFirstLetter.ts";
import Button from "../Button/Button.tsx";
import {routes} from "../../lib/routes.ts";
import {useNavigate} from "react-router-dom";
import HeartCheckBox from "../HeartCheckBox/HeartCheckBox.tsx";
import {slugify} from "../../lib/slugify.ts";

const ServiceCard = ({service, favorite, setValue}: {
  service: ServiceProps,
  favorite: boolean,
  setValue: (value: (string[] | ((val: string[]) => string[]))) => void
}) => {
  const navigate = useNavigate();

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
        <img
          src={service.imageUrl}
          alt="Service Image"/>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.topContent}>
          <Badge
            text={capitalizeFirstLetter(service.category)}
            onClick={handleBadgeClick(
              `${routes.search}/${slugify(service.category)}`
            )}
          />
          <HeartCheckBox checkBoxId={service.id}
                         checked={favorite}
                         setValue={setValue}/>
        </div>
        <h3>{service.vendor}</h3>
        <h4>{service.representative}</h4>
        <p>{service.address}</p>
        <Button onClick={handleClick}>Book now</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
