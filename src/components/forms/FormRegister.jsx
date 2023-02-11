import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useState, useContext } from "react";
import UserContext from "../../store/UserContext";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  // States
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  // Context
  const { users, postUser, setUserLoggedin, setCurrentUser, currentUser } = useContext(UserContext);

  // Functions
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, "User name must be at least 2 characters long.")
      .max(16, "User name must not exceed 15 characters.")
      .required("Required field."),
    userProfileImgUrl: Yup.string().url("Not URL format.").required("Required field."),
    userEmail: Yup.string().email("Not email format.").required("Required field."),
    userPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long.")
      .max(16, "Password must not exceed 16 characters.")
      .required("No password provided."),
    userPasswordRepeat: Yup.string()
      .oneOf([Yup.ref("userPassword"), null], "Original and repeated passwords do not match.")
      .required("Required field."),
  });

  return (
    <>
      <div className="formRegisterWrapper">
        <h2>Register:</h2>
        <Formik
          initialValues={{
            id: nanoid(),
            userName: "",
            userProfileImgUrl: "",
            userEmail: "",
            userPassword: "",
            userPasswordRepeat: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm, setSubmitting, setFieldValue }) => {
            const editInputs = (inputs) => {
              delete inputs.userPasswordRepeat;
              return { ...inputs };
            };
            const newUser = editInputs(values);
            setFormError("");
            if (
              !users.some(
                (user) => user.userEmail === values.userEmail || user.userName === values.userName
              )
            ) {
              setUserLoggedin(true);
              setCurrentUser(newUser);
              postUser(newUser);
              navigate(`/users/${newUser.id}`);
              resetForm();
            } else {
              setFormError("Such user already exists. Change email and/or name and try again.");
              resetForm();
              setFieldValue("userName", values.userName);
              setFieldValue("userProfileImgUrl", values.userProfileImgUrl);
              setFieldValue("userEmail", values.userEmail);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="userNameWrap">
                <label htmlFor="userName">User name:</label>
                <Field name="userName" />
                <ErrorMessage name="userName">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>

              <div className="userProfileImgUrlWrap">
                <label htmlFor="userProfileImgUrl">Profile image link:</label>
                <Field name="userProfileImgUrl" />
                <ErrorMessage name="userProfileImgUrl">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>

              <div className="userEmailWrap">
                <label htmlFor="userEmail">Email:</label>
                <Field name="userEmail" />
                <ErrorMessage name="userEmail">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>

              <div className="userPasswordWrap">
                <label htmlFor="userPassword">Password:</label>
                <Field name="userPassword" type="password" />
                <ErrorMessage name="userPassword">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>

              <div className="userPasswordRepeatWrap">
                <label htmlFor="userPasswordRepeat">Repeat password:</label>
                <Field name="userPasswordRepeat" type="password" />
                <ErrorMessage name="userPasswordRepeat">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>
              <div className="buttonSubmitWrap">
                <button type="submit" disabled={isSubmitting}>
                  Register
                </button>
              </div>
              <div className="formErrorMessage">
                <p>{formError}</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormRegister;
