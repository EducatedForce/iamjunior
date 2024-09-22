import styles from "./LoginPageLayout.module.scss"
import {Outlet} from "react-router-dom";
import TopBarAuth from "../components/TopBarAuth/TopBarAuth.tsx";

const LoginPageLayout = () => {
  return (
    <div className={styles.loginPage}>
      <TopBarAuth/>
      <Outlet/>
    </div>
  );
};

export default LoginPageLayout;
