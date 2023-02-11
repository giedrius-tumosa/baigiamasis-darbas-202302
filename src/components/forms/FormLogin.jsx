import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useContext } from "react";
import UserContext from "../../store/UserContext";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [loginError, setLoginError] = useState("");
  const {
    users,
    setCurrentUser,
    userLoggedin,
    setUserLoggedin,
    currentUser,
    saveToSessionStorage,
  } = useContext(UserContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Required field."),
    userPassword: Yup.string().required("Required field."),
  });
  // TODO: ar reikia issubmitting
  //  TODO: ar perdaryt su localstorage
  return (
    <>
      <div className="formLoginWrapper" style={{ display: "flex", gap: "0.5rem" }}>
        <h2>Login:</h2>
        <Formik
          initialValues={{
            userName: "",
            userPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const userData = users.find(
              (user) =>
                user.userName === values.userName && user.userPassword === values.userPassword
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
            <Form style={{ display: "flex", gap: "0.5rem" }}>
              <div className="userNameWrapper" style={{ display: "flex", gap: "0.5rem" }}>
                <label htmlFor="userName">User name: </label>
                <Field name="userName" id="userName" />
                <ErrorMessage name="userName">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>

              <div className="userPasswordWrapper" style={{ display: "flex", gap: "0.5rem" }}>
                <label htmlFor="userPassword">Password: </label>
                <Field name="userPassword" id="userPassword" type="password" />
                <ErrorMessage name="userPassword">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>

              <div className="buttonSubmitWrap">
                <button type="submit">Login</button>
              </div>
              <div className="formErrorMessage">
                <p>{loginError}</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormLogin;
