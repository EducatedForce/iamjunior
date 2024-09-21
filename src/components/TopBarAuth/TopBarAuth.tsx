import styles from "./TopBarAuth.module.scss";
import BrandLogo from "../BrandLogo/BrandLogo.tsx";

const TopBarAuth = () => {
  return (
    <header className={styles.authContainer}>
      <BrandLogo/>
    </header>
  );
};

export default TopBarAuth;
