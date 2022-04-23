import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schemaContact = yup.object().shape({
  firma: yup
    .string()
    .min(4, "* Min length is 4")
    .max(40, "* Max length is 40")
    .required("* The firma is required"),
  email: yup
    .string()
    .email("* Enter valid email")
    .min(6, "* Min length is 6")
    .required("* The email is required"),
  telephone: yup
    .string()
    .required("* The phone is required")
    .matches(phoneRegExp, "* Please enter a valid phone"),
  question: yup
    .string()
    .required("* Please enter your message")
    .min(4, "* Your message is too short")
    .max(200, "* Your message is too long"),
});
