import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import AnswerContext from "../../store/AnswerContext";
import { useContext } from "react";

const FormEditAnswer = ({ answer, editMode, setEditMode }) => {
  const { updateAnswer } = useContext(AnswerContext);

  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .min(2, "Description must be at least 2 characters long.")
      .max(500, "Description must not exceed 500 characters.")
      .required("Required field."),
  });

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <>
      <div className="formEditAnswerWrapper">
        <h2>Edit your answer:</h2>
        <Formik
          initialValues={{
            description: answer.description,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const modifyAnswer = (inputs) => {
              return {
                ...answer,
                editTimeStamp: new Date().toLocaleString("lt-LT"),
                ...inputs,
              };
            };
            const newAnswer = modifyAnswer(values);
            updateAnswer(newAnswer);
            setEditMode(false);
            resetForm();
          }}
        >
          {() => (
            <Form>
              <div className="descriptionWrap">
                <label htmlFor="description">Description:</label>
                <Field name="description" id="description" as="textarea" />
                <ErrorMessage name="description">
                  {(message) => <div className="formErrorMessage">{message}</div>}
                </ErrorMessage>
              </div>
              {/* TODO: pameginti isSubmitting, kai true - disable submit button */}
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

export default FormEditAnswer;
