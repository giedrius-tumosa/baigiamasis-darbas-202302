import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useContext } from "react";
import UserContext from "../../store/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./formLogin.module.scss";

const FormLogin = () => {
  const [loginError, setLoginError] = useState("");
  const { users, setCurrentUser, setUserLoggedin, saveToSessionStorage } = useContext(UserContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("User name required."),
    userPassword: Yup.string().required("Password required."),
  });
  // TODO: ar reikia issubmitting
  //  TODO: ar perdaryt su localstorage
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          userPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const userData = users.find(
            (user) => user.userName === values.userName && user.userPassword === values.userPassword
          );
          if (userData) {
            setLoginError("");
            saveToSessionStorage(userData);
            setCurrentUser(userData);
            setUserLoggedin(true);
            navigate(`/users/${userData.id}`);
          }
          if (!userData) {
            setUserLoggedin(false);
            setLoginError("Incorrect user name or password.");
          }
          resetForm();
        }}
      >
        {() => (
          <Form className={styles.formLogin}>
            <div className={styles.formInputs}>
              <div className="userNameWrapper">
                <label htmlFor="userName">User name: </label>
                <Field name="userName" id="userName" />
              </div>
              <div className="userPasswordWrapper">
                <label htmlFor="userPassword">Password: </label>
                <Field name="userPassword" id="userPassword" type="password" />
              </div>
              <div className={styles.buttonSubmitWrap}>
                <button type="submit">Login</button>
              </div>
            </div>
            <div className={styles.formErrors}>
              <ErrorMessage name="userName">
                {(message) => <div className="formErrorMessage">{message}</div>}
              </ErrorMessage>
              <ErrorMessage name="userPassword">
                {(message) => <div className="formErrorMessage">{message}</div>}
              </ErrorMessage>
              <div className="formErrorMessage">
                <p>{loginError}</p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
