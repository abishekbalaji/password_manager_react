import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/userSelectors";

import "./Navigation.scss";
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
  const handleSignOut = async () => await signOutUser();
  const currentUser = useSelector(selectCurrentUser);
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
          {currentUser ? (
            <span onClick={handleSignOut} className="navbar_navlink">
              Sign Out
            </span>
          ) : (
            <Link className="navbar_navlink" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
