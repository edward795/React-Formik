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
  validate,
  onSubmit,
  validationSchema,
  validateComments,
};
