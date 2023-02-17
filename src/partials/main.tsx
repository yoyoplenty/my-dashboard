import { useState } from "react";
import Header from "./nav/header/header";
import Sidebar from "./nav/sidebar/sidebar";
import "./nav/header/header.modules.css";

const Main = ({ children }: any) => {
  const [show, setShow] = useState(false);

  const showSideBar = () => {
    setShow(!show);
  };

  return (
    <div className="dashboard">
      <Header show={show} showSideBar={showSideBar} />
      <Sidebar show={show} />

      <main className={`${show ? "header-padding" : "transit"}`}> {children} </main>
    </div>
  );
};

export default Main;
