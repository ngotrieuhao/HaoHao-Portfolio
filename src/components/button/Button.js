import React from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  isLoading,
  ...props
}) => {
  //   const { isLoading } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <button
      className="btn_send--contact"
      type={type}
      onClick={onClick}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
