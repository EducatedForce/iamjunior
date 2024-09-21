import styles from './Button.module.scss';
import {useNavigate} from "react-router-dom";
import {routes} from "../../lib/routes.ts";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.login);
  };

  return (
    <button
      className={styles.btn}
      onClick={handleClick}
    >
      Login/ Sign Up
    </button>
  );
};

export default Button;
