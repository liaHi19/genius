import React from "react";

const MyTextarea = ({ register, error, ...props }) => {
  return (
    <div style={{ height: "188px" }}>
      <textarea {...register} {...props} />
      {error && <div className="contact__error">{error.message}</div>}
    </div>
  );
};

export default MyTextarea;
