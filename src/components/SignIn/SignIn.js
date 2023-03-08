import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInAuthWithGoogleAsync,
  signInWithEmailAndPasswordAsync,
} from "../../store/user/userActions";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(INITIAL_FORM_STATE);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = formFields;

  const handleGoogleSignIn = async () => {
    dispatch(signInAuthWithGoogleAsync());
    // navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    // Do authentication
    try {
      dispatch(signInWithEmailAndPasswordAsync(email, password));
      setFormFields(INITIAL_FORM_STATE);
      navigate("/");
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Wrong credentials");
      } else {
        console.log("Sign In failed", error.message);
      }
    }
  };

  return (
    <div className="signin_container">
      <h2>Already have an account?</h2>
      <h3>Sign In</h3>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <div className="signin_buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" btnType="google" onClick={handleGoogleSignIn}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
