import { useState } from "react";
import FormInput from "../FormInput/FormInput";
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do auth
    setFormFields(INITIAL_FORM_STATE);
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
      </form>
    </div>
  );
};

export default SignUp;
