import {Outlet} from "react-router-dom";
import TopBarAuth from "../components/TopBarAuth/TopBarAuth.tsx";

const LoginPageLayout = () => {
  return (
    <>
      <TopBarAuth/>
      <Outlet/>
    </>
  );
};

export default LoginPageLayout;
