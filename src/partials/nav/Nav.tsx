import { useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);

  const showSideBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <header className={`w-100 header`}>
        <div className="header_toggle">
          <i className="header-menu"></i>
        </div>
        <div className="dropdown"></div>
      </header>
    </div>
  );
};

export default Nav;
