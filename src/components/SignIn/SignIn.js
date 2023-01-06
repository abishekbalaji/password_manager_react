import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(INITIAL_FORM_STATE);

  const { email, password } = formFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Do authentication
    setFormFields(INITIAL_FORM_STATE);
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
      </form>
    </div>
  );
};

export default SignIn;
