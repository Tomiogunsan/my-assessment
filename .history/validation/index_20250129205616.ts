import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("first name is required"),
  last_name: Yup.string().required("last name is required"),
  phone_number
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
