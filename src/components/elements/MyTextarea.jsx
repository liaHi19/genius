import React from "react";

const MyTextarea = ({ register, error, ...props }) => {
  return (
    <>
      <textarea {...register} {...props} />
      {error && <div className="contact__error">{error.message}</div>}
    </>
  );
};

export default MyTextarea;
