import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import QuestionContext from "../../store/QuestionContext";
import { useContext } from "react";

const FormNewQuestion = ({ question }) => {
  const { updateQuestion, setEditMode } = useContext(QuestionContext);
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Title must be at least 2 characters long.")
      .max(100, "Title must not exceed 30 characters.")
      .required("Required field."),
    description: Yup.string()
      .min(20, "Description must be at least 5 characters long.")
      .max(500, "Description must not exceed 500 characters.")
      .required("Required field."),
  });

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <>
      <div className="formEditQuestionWrapper">
        <h2>Edit your question:</h2>
        <Formik
          initialValues={{
            title: question.title,
            description: question.description,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const modifyQuestion = (inputs) => {
              return {
                ...question,
                editTimeStamp: new Date().toLocaleString("lt-LT"),
                ...inputs,
              };
            };
            const newQuestion = modifyQuestion(values);
            updateQuestion(newQuestion);
            setEditMode(false);
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
              <div className="formEditQuestionBtns">
                <div className="buttonSubmitWrap">
                  <button type="submit">Save</button>
                </div>
                <div className="buttonCanceltWrap">
                  <button type="button" onClick={handleCancel}>
                    Cancel
                  </button>
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
