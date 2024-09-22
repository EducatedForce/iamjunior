import styles from "./TopBarAuth.module.scss";
import BrandLogo from "../BrandLogo/BrandLogo.tsx";

const TopBarAuth = () => {
  return (
    <header className={styles.authContainer}>
      <div className={styles.logoContainer}>
        <BrandLogo/>
      </div>
    </header>
  );
};

export default TopBarAuth;
