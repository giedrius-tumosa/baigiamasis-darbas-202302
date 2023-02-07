import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const FormNewAnswer = () => {
  const [values, setValues] = useState();

  const validationSchema = Yup.object().shape({});

  const handleSubmit = (e) => {};

  return (
    <>
      <div className="formNewAnswerWrapper">
        <h2>Post new answer:</h2>
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("FormNewAnswer", values);
          }}
        >
          {({ errors, touched }) => <Form></Form>}
        </Formik>
      </div>
    </>
  );
};

export default FormNewAnswer;
