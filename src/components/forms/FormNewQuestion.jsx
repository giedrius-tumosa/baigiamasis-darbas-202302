import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const FormNewQuestion = () => {
  const [values, setValues] = useState();

  const validationSchema = Yup.object().shape({});

  const handleSubmit = (e) => {};

  return (
    <>
      <div className="formNewQuestionWrapper">
        <h2>Post new question:</h2>
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("FormNewQuestion", values);
          }}
        >
          {({ errors, touched }) => <Form></Form>}
        </Formik>
      </div>
    </>
  );
};

export default FormNewQuestion;
