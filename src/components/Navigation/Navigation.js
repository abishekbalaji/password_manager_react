import { Link, Outlet } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navbar_container">
        <Link className="navbar_navlink" to="/">
          Password Manager
        </Link>
        <div className="navbar_links-container">
          <Link className="navbar_navlink" to="/add">
            Add Item
          </Link>
          <Link className="navbar_navlink" to="/retrieve">
            Retrieve Item
          </Link>
          <Link className="navbar_navlink" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
