import styles from './TopBar.module.scss';
import logo from '../../assets/logo.svg';
import {Link, NavLink} from "react-router-dom";
import {routes} from "../../lib/routes.ts";
import Button from "../Button/Button.tsx";

const TopBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <Link to={routes.home}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt="Logo"
            />
          </div>
        </Link>
        <nav>
          <ul>
            <li><NavLink to={routes.home}>Home</NavLink></li>
            <li><NavLink to={routes.services}>Services</NavLink></li>
            <li><NavLink to={routes.about}>About Us</NavLink></li>
          </ul>
        </nav>
      </div>
      <div>
        <Button/>
      </div>
    </header>
  );
};

export default TopBar;
