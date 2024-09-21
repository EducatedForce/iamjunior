import {Outlet} from "react-router-dom";
import TopBar from "../components/TopBar/TopBar.tsx";

const HomePageLayout = () => {
  return (
    <>
      <TopBar/>
      <Outlet/>
    </>
  );
};

export default HomePageLayout;
