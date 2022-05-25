import * as Yup from "yup";

const initialValues = {
  name: "Raju",
  email: "Raju@apple.com",
  channel: "Ravi",
  comments: "Very good!",
  address: "4th street,Noida",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: [0, 0],
  phNumbers: [""],
};

const savedValues = {
  name: "Ram",
  email: "Ram@apple.com",
  channel: "Ram's Youtube channel",
  comments: "Very bad!",
  address: "4th street,Mumbai",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: [0, 0],
  phNumbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("onSubmit Props:", onSubmitProps);
  console.log("formdata:", values);
  //setting the submit button as enabled after api call
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
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
  address: Yup.string().required("!Required"),
});

const validateComments = (value) => {
  let error = {};
  if (!value) {
    error = "Required!";
  }
  return error;
};
export {
  initialValues,
  savedValues,
  validate,
  onSubmit,
  validationSchema,
  validateComments,
};
