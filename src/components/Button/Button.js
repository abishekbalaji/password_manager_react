import "./Button.scss";

const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <button {...otherProps} className={`custom-button ${btnType}`}>
      {children}
    </button>
  );
};

export default Button;
