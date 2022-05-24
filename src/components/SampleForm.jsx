import React from "react";
import "./SampleForm.css";
import { useFormik } from "formik";
import {
  validate,
  onSubmit,
  initialValues,
  validationSchema,
} from "./SampleFormHelper";

export const SampleForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    // validate: validate,
    validationSchema: validationSchema,
  });
  //   console.log("form values", formik.values);
  //   console.log("Form Errors", formik.errors);
  console.log("visited fields:", formik.touched);
  return (
    <div className="container">
      <div className="form-block">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
