import "./Button.scss";

const Button = ({ children, btnType = "", customClass, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`custom-button ${customClass} ${btnType}`}
    >
      {children}
    </button>
  );
};

export default Button;
