import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const FormRegister = () => {
  const [values, setValues] = useState();

  const validationSchema = Yup.object().shape({});

  return (
    <>
      <div className="formRegisterWrapper">
        <h2>Register:</h2>
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("FormRegister", values);
          }}
        >
          {({ errors, touched }) => <Form></Form>}
        </Formik>
      </div>
    </>
  );
};

export default FormRegister;
