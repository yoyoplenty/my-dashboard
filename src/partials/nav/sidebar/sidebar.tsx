import "./sidebar.modules.css";

const Sidebar = ({ show }: any) => {
  return (
    <div>
      <aside className={`sidebar bg-danger ${show ? "reveal" : " "}`}>
        <nav className="sidebar-nav">
          <div>
            {/* <NavLink to={"/"} className="nav_logo"> */}
            <img src="/img/logo.png" alt="logo" className="logo" />
            <span className="nav_logo-name">DaPelican</span>
            {/* </NavLink> */}

            <div className="sidebar-nav-list">
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
            </div>
          </div>

          <span className="sidebar-link">
            <i className="bx bx-log-out bx-sm sidebar-icon"></i>
            <span className="icon-name">SignOut</span>
          </span>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
