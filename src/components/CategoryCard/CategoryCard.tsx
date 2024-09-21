import styles from "./CategoryCard.module.scss";
import {useNavigate} from "react-router-dom";
import {routes} from "../../lib/routes.ts";
import {slugify} from "../../lib/slugify.ts";

const CategoryCard = ({
                        icon,
                        label,
                        color,
                        type = "primary",
                        active = false
                      }: CategoryCardProps) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${routes.search}/${slugify(label)}`);
  };

  return (
    <div
      className={type === "primary"
        ? `${styles.categoryCard} ${styles.primary}`
        : `${styles.categoryCard} ${styles.secondary} ${active && styles.active}`}
      onClick={handleClick}
    >
      <div className={styles.icon} style={{color: color}}>
        {icon}
      </div>
      <p>{label}</p>
      <div className={styles.overlay}/>
    </div>
  );
};

export default CategoryCard;
