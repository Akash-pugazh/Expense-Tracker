const Button = ({ children, buttonClassName, ...rest }) => {
  return <button className={buttonClassName} {...rest}>{children}</button>;
};

export default Button;
