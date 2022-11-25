import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({ name = "", type = "text", control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return <textarea id={name} type={type} {...field} {...props}></textarea>;
};

export default Textarea;
