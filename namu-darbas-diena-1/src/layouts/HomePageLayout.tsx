import TopBar from "../components/TopBar/TopBar.tsx";
import {Outlet} from "react-router-dom";

const HomePageLayout = () => {
  return (
    <>
      <TopBar/>
      <Outlet/>
    </>
  );
};

export default HomePageLayout;
