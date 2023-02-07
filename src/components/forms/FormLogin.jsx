import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormLogin = () => {
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Required field."),
    userPassword: Yup.string().required("Required field."),
  });

  return (
    <>
      <div className="formLoginWrapper">
        <h2>Login:</h2>
        <Formik
          initialValues={{
            userName: "",
            userPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("FormLogin", values);
            resetForm({
              userName: "",
              userPassword: "",
            });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="userNameWrapper">
                <label htmlFor="userName">User name: </label>
                <Field name="userName" id="userName" />
                <ErrorMessage name="userName">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>
              <div className="userPasswordWrapper">
                <label htmlFor="userPassword">Password: </label>
                <Field name="userPassword" id="userPassword" />
                <ErrorMessage name="userPassword">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>
              <div className="buttonSubmit">
                <button type="submit">Login</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormLogin;
