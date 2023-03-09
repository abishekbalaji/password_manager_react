import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import RetrievedItems from "../../components/RetrievedItems/RetrievedItems";
import { selectCurrentUser } from "../../store/user/userSelectors";

import "./RetrieveItem.scss";

const INITIAL_FORM_STATE = {
  title: "",
  user: "",
};

const RetrieveItem = () => {
  const [formFields, setFormFields] = useState(INITIAL_FORM_STATE);
  const [retrievedCreds, setRetrievedCreds] = useState(null);
  const { title, user } = formFields;
  const currentUser = useSelector(selectCurrentUser);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      const URL = `http://localhost:8080/manage/get/${title}/${
        currentUser.email
      }/${user || null}`;
      const response = await fetch(URL);
      const data = await response.json();
      setRetrievedCreds(data.data);
    } else {
      alert("Log in first!");
    }
  };
  return (
    <div className="retrieve-items_page">
      <h3>Enter title (and user) to retrieve items</h3>
      <form onSubmit={handleFormSubmit} className="retrieve-items_form">
        <FormInput
          type="text"
          name="title"
          label="Title"
          onChange={handleChange}
          value={title}
          required
        />
        <FormInput
          type="text"
          name="user"
          value={user}
          label="User"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
      {retrievedCreds && (
        <div className="retrieved-items_section">
          <RetrievedItems creds={retrievedCreds} />
        </div>
      )}
    </div>
  );
};

export default RetrieveItem;
