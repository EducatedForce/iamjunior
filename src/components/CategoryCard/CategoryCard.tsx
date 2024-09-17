import styles from "./CategoryCard.module.scss";
import {useNavigate} from "react-router-dom";
import {routes} from "../../lib/routes.ts";
import {slugify} from "../../lib/slugify.ts";

const CategoryCard = ({icon, label, color}: CategoryCardProps) => {

  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`${routes.search}/${slugify(label)}`);
  }

  return (
    <div
      className={styles.categoryCard}
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
