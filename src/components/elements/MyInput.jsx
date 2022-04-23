import React from "react";
import { useForm } from "react-hook-form";

const MyInput = ({ register, error, ...props }) => {
  return (
    <>
      <input {...register} {...props} />
      {error && <div className="contact__error">{error.message}</div>}
    </>
  );
};

export default MyInput;
