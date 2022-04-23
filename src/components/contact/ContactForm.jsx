import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schemaContact } from "../../helpers/schemaContact";

import MyInput from "../elements/MyInput";
import MyTextarea from "../elements/MyTextarea";
import MyButton from "../elements/MyButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaContact),
  });

  const onSubmitContact = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="contact__form-container">
      <h3 className="contact__title">Schreiben Sie uns!</h3>

      <form className="contact__form" onSubmit={handleSubmit(onSubmitContact)}>
        <MyInput
          className="contact__input input contact__input--full"
          placeholder="firma / organisation"
          type="text"
          name="firma"
          register={register("firma")}
          error={errors.firma}
        />
        <div className="contact__inputs">
          <div className="contact__input-container">
            <MyInput
              className="contact__input input"
              placeholder="E-mail"
              type="email"
              name="email"
              register={register("email")}
              error={errors.email}
            />
          </div>
          <div className="contact__input-container">
            <MyInput
              className="contact__input input"
              placeholder="Telefon"
              type="tel"
              name="telephone"
              register={register("telephone")}
              error={errors?.telephone}
            />
          </div>
        </div>
        <MyTextarea
          className="contact__textarea textarea"
          placeholder="Was ist ihr anliegen?"
          name="question"
          register={register("question")}
          error={errors.question}
        />
        <div className="contact__btn-container">
          <MyButton
            className={`btn ${isValid ? "contact__btn" : "btn-disabled"}`}
            disabled={!isValid}
          >
            senden
          </MyButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
