import React from "react";
import { Formik } from "formik";

/**
 * HELPS TO VALIDATE THE FORMIK FORM ONBLUR AND ONCHANGE
 * AND RETURN STHE ERROR OBJECT
 */

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 12) {
    errors.password = "Minimum required 12 characters";
  }
  return errors;
}

/**
 * FUNCTION THAT RUNS WHEN CLICKING "SUBMIT" BUTTON
 */
function onSubmit(values, { setSubmitting }) {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}

/**
 * INITIAL STATE FOR A FORMIK VALIDATION
 */
const initialState = { email: "", password: "" };

const Formikbasic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={initialState}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button
            type="submit"
            disabled={isSubmitting || errors.email || errors.password}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Formikbasic;
