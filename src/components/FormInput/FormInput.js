import "./FormInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input_group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input_label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
