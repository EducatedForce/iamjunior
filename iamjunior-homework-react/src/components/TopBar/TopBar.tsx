import styles from './TopBar.module.scss';
import {useNavigate} from "react-router-dom";
import {routes} from "../../lib/routes.ts";
import Button from "../Button/Button.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import useLocalStorage from "../../hooks/useLocalStorage.ts";
import {useEffect, useState} from "react";


const TopBar = () => {

  const navigate = useNavigate();
  const [storedValue, setValue] = useLocalStorage("userServiceApp", {});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (Object.keys(storedValue).length > 0) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [storedValue]);


  const handleClick = () => {
    if (loggedIn) {
      setValue({});
    } else {
      navigate(routes.login);
    }
  };
  return (
    <header className={styles.header}>
      <NavBar/>
      <div className={styles.loginButton}>
        {loggedIn && <p>{(storedValue as User).userName}</p>}
        <Button onClick={handleClick}>
          {loggedIn ? "Logout" : "Login / Sign up"}
        </Button>
      </div>
    </header>
  );
};

export default TopBar;
