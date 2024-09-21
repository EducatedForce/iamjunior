import {Outlet} from "react-router-dom";
import TopBar from "../components/TopBar/TopBar.tsx";

const LoginPageLayout = () => {
  return (
    <>
      <TopBar/>
      <Outlet/>
    </>
  );
};

export default LoginPageLayout;
