import React from "react";
import { useController } from "react-hook-form";

const Input = ({ name = "", type = "text", control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return <input id={name} name={name} type={type} {...field} {...props} />;
};

export default Input;
