import styles from './TopBar.module.scss';
import {useNavigate} from "react-router-dom";
import {routes} from "../../lib/routes.ts";
import Button from "../Button/Button.tsx";
import NavBar from "../NavBar/NavBar.tsx";


const TopBar = ({loggedIn}: { loggedIn?: boolean }) => {

  const navigate = useNavigate();
  const buttonLabel = loggedIn ? "Logout" : "Login / Sign up";

  const handleClick = () => {
    navigate(routes.login);
  };
  return (
    <header className={styles.header}>
      <NavBar/>
      <div className={styles.loginButton}>
        <Button label={buttonLabel} onClick={handleClick}/>
      </div>
    </header>
  );
};

export default TopBar;
