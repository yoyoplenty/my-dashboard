import { Outlet } from "react-router-dom";
import Main from "../partials/nav/main";

const Dashboard = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Dashboard;
