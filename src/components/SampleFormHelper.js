import * as Yup from "yup";

const initialValues = {
  name: "Raju",
  email: "Raju@apple.com",
  channel: "Ravi",
};

const onSubmit = (values) => {
  console.log("formdata:", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid Email Format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});
export { initialValues, validate, onSubmit, validationSchema };
