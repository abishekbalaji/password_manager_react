import { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase";

import "./SignUp.scss";

const INITIAL_FORM_STATE = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(INITIAL_FORM_STATE);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password donot match!");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;
      await createUserDocument(user, "users", {
        displayName,
      });
      setFormFields(INITIAL_FORM_STATE);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("User already exists", error);
      }
    }
  };

  return (
    <div className="signup_container">
      <h2>Don't have an account?</h2>
      <h3>Sign up now</h3>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
