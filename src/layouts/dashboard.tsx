import { Outlet } from "react-router-dom";
import Main from "../partials/main";

const Dashboard = () => {
  return (
    <>
      <Main className="dashboard">
        <Outlet />
      </Main>
    </>
  );
};

export default Dashboard;
