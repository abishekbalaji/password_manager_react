import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication_container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
