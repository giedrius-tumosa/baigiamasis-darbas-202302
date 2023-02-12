import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import AnswerContext from "../../store/AnswerContext";
import { useContext } from "react";
import UserContext from "../../store/UserContext";

const FormNewAnswer = () => {
  const { currentUser } = useContext(UserContext);

  const { postAnswer } = useContext(AnswerContext);
  const { questionId } = useParams();

  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .min(2, "Description must be at least 2 characters long.")
      .max(1000, "Description must not exceed 1000 characters.")
      .required("Required field."),
  });

  return (
    <>
      <div className="formNewAnswerWrapper">
        <Formik
          initialValues={{
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const newAnswer = (inputs) => {
              return {
                id: nanoid(),
                ownerId: currentUser.id,
                questionId: questionId,
                likedBy: [],
                dislikedBy: [],
                editTimeStamp: "",
                postTimeStamp: new Date().toLocaleString("lt-LT"),
                ...inputs,
              };
            };
            postAnswer(newAnswer(values));
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
