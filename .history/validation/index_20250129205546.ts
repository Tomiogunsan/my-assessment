import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("Name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
