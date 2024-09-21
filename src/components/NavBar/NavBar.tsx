import styles from "./NavBar.module.scss";
import {NavLink} from "react-router-dom";
import {routes} from "../../lib/routes.ts";
import BrandLogo from "../BrandLogo/BrandLogo.tsx";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <BrandLogo/>
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
