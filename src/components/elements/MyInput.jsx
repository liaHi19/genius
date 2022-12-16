import React from "react";

const MyInput = ({ register, error, ...props }) => {
  return (
    <div style={{ height: "69px" }}>
      <input {...register} {...props} />
      {error && <div className="contact__error">{error.message}</div>}
    </div>
  );
};

export default MyInput;
