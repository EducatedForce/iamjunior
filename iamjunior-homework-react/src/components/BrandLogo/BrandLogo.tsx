import styles from "../BrandLogo/BrandLogo.module.scss";
import {Link} from "react-router-dom";
import {routes} from "../../lib/routes.ts";
import logo from "../../assets/logo.svg";

const BrandLogo = () => {
  return (
    <Link to={routes.home}>
      <div className={styles.logo}>
        <img
          src={logo}
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default BrandLogo;
