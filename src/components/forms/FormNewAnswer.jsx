import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const FormNewAnswer = () => {
  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .min(2, "Description must be at least 2 characters long.")
      .max(500, "Description must not exceed 500 characters.")
      .required("Required field."),
  });

  return (
    <>
      <div className="formNewAnswerWrapper">
        <h2>Post your answer:</h2>
        <Formik
          initialValues={{
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const newAnswer = (inputs) => {
              return {
                id: nanoid(),
                ownerId: "", //TODO: current user id idet
                likedBy: [],
                dislikedBy: [],
                isEdited: false,
                editTimeStamp: "",
                postTimeStamp: new Date().toLocaleString("lt-LT"),
                ...inputs,
              };
            };
            console.log("FormNewAnswer", newAnswer(values));
            resetForm({
              description: "",
            });
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
              <div className="buttonSubmitWrap">
                <button type="submit">Post</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormNewAnswer;
