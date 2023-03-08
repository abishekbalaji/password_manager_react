import { useState } from "react";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import { addItemToDB } from "../../utils/db/helperFunctions";

import "./AddItem.scss";

const INITIAL_FORM_STATE = {
  title: "",
  user: "",
  password: "",
};

const AddItem = () => {
  const [formFields, setFormFields] = useState(INITIAL_FORM_STATE);
  const { title, user, password } = formFields;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const entryObj = {
      title,
      creds: { user, password },
    };
    await addItemToDB(entryObj);
  };
  return (
    <div className="add-item_container">
      <Button customClass="add-item_custom-btn">Add</Button>
      <form onSubmit={handleFormSubmit} className="add-item_input-container">
        <FormInput
          onChange={handleInputChange}
          label="Title"
          value={title}
          name="title"
          customClass="add-item_form-input"
          required
        />
        <div className="add-item_inner-input-container">
          <FormInput
            onChange={handleInputChange}
            label="User"
            name="user"
            value={user}
            customClass="add-item_form-input"
            required
          />
          <FormInput
            onChange={handleInputChange}
            label="Password"
            name="password"
            value={password}
            customClass="add-item_form-input"
            required
          />
          <Button type="submit" customClass="add-item_custom-btn">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
