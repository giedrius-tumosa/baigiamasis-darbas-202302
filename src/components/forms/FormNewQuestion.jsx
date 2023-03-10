import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import QuestionContext from "../../store/QuestionContext";
import { useContext } from "react";
import UserContext from "../../store/UserContext";
import { useNavigate } from "react-router-dom";
import BackButton from "../global/BackButton";

const FormNewQuestion = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { postQuestion } = useContext(QuestionContext);
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Title must be at least 2 characters long.")
      .max(150, "Title must not exceed 150 characters.")
      .required("Required field."),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters long.")
      .max(1000, "Description must not exceed 1000 characters.")
      .required("Required field."),
  });
  return (
    <>
      <div className="formNewQuestionWrapper">
        <h2>Post your question:</h2>
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const newQuestion = (inputs) => {
              return {
                id: nanoid(),
                ownerId: currentUser.id,
                likedBy: [],
                dislikedBy: [],
                editTimeStamp: "",
                postTimeStamp: new Date().toLocaleString("lt-LT"),
                ...inputs,
              };
            };
            postQuestion(newQuestion(values));
            navigate(-1);
            resetForm();
          }}
        >
          {() => (
            <Form>
              <div className="titleWrap">
                <label htmlFor="title">Title:</label>
                <Field name="title" id="title" />
                <ErrorMessage name="title">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>
              <div className="descriptionWrap">
                <label htmlFor="description">Description:</label>
                <Field name="description" id="description" as="textarea" />
                <ErrorMessage name="description">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>
              <div className="formButtons">
                <div className="buttonSubmitWrap">
                  <button type="submit">Post</button>
                </div>
                <div className="buttonCancelWrap">
                  <BackButton textContent={"Cancel"} goTo={"/"} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormNewQuestion;
