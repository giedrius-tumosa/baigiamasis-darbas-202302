import { createContext, useState } from "react";
import {
  getData, postData, patchData, deleteData
} from "../fetchApiFunctions";

const ENDPOINT_ANSWERS = "http://localhost:5000/answers";


const AnswerContext = createContext();

const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [loadingAnswers, setLoadingAnswers] = useState(false);
  const [answerFetchErrors, setAnswerFetchErrors] = useState({
    getErr: "",
    postErr: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  // Error library

  const errorLib = {
    getErr: "Error: could not retreive answer data from server.",
    postErr: "Error: could not post new answer data to server.",
    patchErr: "Error: could not send updates to the server.",
    deleteErr: "Error: could not delete post from server."
  };

  // Functions

  const getAnswers = async () => {
    try {
      setLoadingAnswers(true);
      const answerData = await getData(ENDPOINT_ANSWERS, errorLib.getErr);
      setAnswers(answerData);
      setAnswerFetchErrors({ ...answerFetchErrors, getErr: "" });
    } catch (error) {
      setAnswerFetchErrors({ ...answerFetchErrors, getErr: error.message });
    } finally {
      setLoadingAnswers(false);
    }
  };

  const postAnswer = async (newAnswer) => {
    try {
      setAnswers([...answers, newAnswer]);
      await postData(ENDPOINT_ANSWERS, newAnswer, errorLib.postErr);
      setAnswerFetchErrors({ ...answerFetchErrors, postErr: "" });
    } catch (error) {
      setAnswerFetchErrors({ ...answerFetchErrors, postErr: error.message });
      setAnswers([...answers]);
    }
  };

  const updateAnswer = async (answer) => {
    try {
      const updatedAnswers = answers.map(el => {
        if (el.id === answer.id) {
          return { ...el, ...answer };
        }
        return el;
      });
      setAnswers(updatedAnswers);
      patchData(ENDPOINT_ANSWERS, answer, errorLib.patchErr);
      setAnswerFetchErrors({ ...answerFetchErrors, patchErr: "" });
    } catch (error) {
      setAnswerFetchErrors({ ...answerFetchErrors, patchErr: error.message });
      setAnswers([...answers]);
    }
  };

  const deleteAnswer = async (answerId) => {
    try {
      const updatedAnswers = answers.filter(answ => answ.id !== answerId);
      setAnswers(updatedAnswers);
      deleteData(ENDPOINT_ANSWERS, answerId, errorLib.deleteErr);
      setAnswerFetchErrors({ ...answerFetchErrors, deleteErr: "" });
    } catch (error) {
      setAnswerFetchErrors({ ...answerFetchErrors, deleteErr: error.message });
      setAnswers(answers);
    }
  };

  return (
    <AnswerContext.Provider value={{
      answers, setAnswers,
      loadingAnswers, setLoadingAnswers,
      answerFetchErrors, setAnswerFetchErrors,
      getAnswers, postAnswer,
      updateAnswer, editMode, setEditMode,
      deleteMode, setDeleteMode,
      deleteAnswer
    }}>
      {children}
    </AnswerContext.Provider>
  );

};

export { AnswerProvider };
export default AnswerContext;