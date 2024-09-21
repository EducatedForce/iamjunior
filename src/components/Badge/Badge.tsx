import styles from './Badge.module.scss';

const Badge = ({text}: { text: string }) => {
  return (
    <span className={styles.badge}>
      {text}
    </span>
  );
};

export default Badge;
