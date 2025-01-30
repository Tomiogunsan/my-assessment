import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("first name is required"),
  last_name: Yup.string().required("last name is required"),
  phone_number: Yup.string().required("phone number is required"),
  date_of_birth
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
