import React from "react";

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <label className="form__label--name" htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

export default Label;
