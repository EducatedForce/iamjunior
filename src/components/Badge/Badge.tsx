import styles from './Badge.module.scss';

const Badge = ({text, onClick}: { text: string, onClick?: () => void }) => {
  return (
    <span className={styles.badge} onClick={onClick}>
      {text}
    </span>
  );
};

export default Badge;
