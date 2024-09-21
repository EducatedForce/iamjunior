import styles from './Button.module.scss';

const Button = ({label, onClick}: ButtonProps) => {

  return (
    <button
      className={styles.btn}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
