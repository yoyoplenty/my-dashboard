import { useState } from "react";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import "../nav/header/header.modules.css";

const Main = ({ children }: any) => {
  const [show, setShow] = useState(false);

  const showSideBar = () => {
    setShow(!show);
  };

  return (
    <>
      <Header show={show} showSideBar={showSideBar} />
      <Sidebar show={show} />

      <main className={`${show ? "header-padding" : "transit"}`}> {children} </main>
    </>
  );
};

export default Main;
