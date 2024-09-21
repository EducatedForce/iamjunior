import styles from "./NavBar.module.scss";
import {Link, NavLink} from "react-router-dom";
import {routes} from "../../lib/routes.ts";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
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
  );
};

export default NavBar;
