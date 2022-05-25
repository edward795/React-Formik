import React from "react";
import "./SampleForm.css";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import {
  validate,
  onSubmit,
  initialValues,
  validationSchema,
  validateComments,
} from "./SampleFormHelper";
import { ErrorMsg } from "./ErrorMsg";

export const SampleForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      //   validateOnChange={false}
      //   validateOnBlur={false}
    >
      <div className="container">
        <div className="form-block">
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component={ErrorMsg} />
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={ErrorMsg} />
              {/*render props pattern - for complex custom component rendering*/}
            </div>
            <div className="form-control">
              <FastField name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  console.log("Render Props:", props);
                  return (
                    <div>
                      <input
                        type="text"
                        id="address"
                        {...field}
                        className={
                          meta.touched && meta.error ? "errorInput" : null
                        }
                      />
                      {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryNo">primary no</label>
              <Field type="number" id="primaryNo" name="phoneNumbers[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryNo">secondary no</label>
              <Field type="number" id="secondaryNo" name="phoneNumbers[1]" />
            </div>

            <div className="form-control">
              <label>List of phone numbers</label>
              <br></br>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index} className="multiField">
                          <div>
                            <Field type="number" name={`phNumbers[${index}]`} />
                          </div>
                          <div>
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}

                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};
