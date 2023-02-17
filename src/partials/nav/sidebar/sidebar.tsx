import "./sidebar.modules.css";
import { links } from "../../../routes/links";
import { NavLink } from "react-router-dom";

const Sidebar = ({ show }: any) => {
  return (
    <div>
      <aside className={`sidebar px-0 ${show ? "reveal" : " "}`}>
        <nav className="sidebar-nav">
          <div className="mx-2">
            <NavLink to={"/"} className="no-decoration mb-2 p-2 d-flex flex-row">
              <img src="/img/logo.png" alt="logo" className="logo" />
              <span className="sidebar-logo-name ps-2">Yoyoplenty</span>
            </NavLink>

            <div className="d-flex flex-column">
              {links.map((link) => {
                return (
                  <NavLink to={link.url} className="sidebar-nav-link" key={link.key}>
                    <i className={`${link.i_class} sidebar-nav-icon`}></i> <span className="nav-name">{link.link_title}</span>
                  </NavLink>
                );
              })}
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
