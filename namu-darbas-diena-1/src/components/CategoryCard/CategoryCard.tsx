import styles from "./CategoryCard.module.scss";

const CategoryCard = ({icon, label, color}: CategoryCardProps) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.icon} style={{color: color}}>
        {icon}
      </div>
      <p>{label}</p>
      <div className={styles.overlay}/>
    </div>
  );
};

export default CategoryCard;
