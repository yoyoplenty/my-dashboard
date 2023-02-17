import "./header.modules.css";

const Header = ({ show, showSideBar }: any) => {
  return (
    <>
      <header className={`header ${show ? "header-padding" : " "}`}>
        <div className="header-toggle">
          <i className={`bx bx-menu ${show ? "bx-x" : ""} header-menu`} onClick={showSideBar}></i>
        </div>

        <div className="dropdown ">
          <span
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" alt="avatar" className="avatar rounded-circle" />
          </span>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
            <li>
              <a className="dropdown-item" href="/profile">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item">Sign out</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
