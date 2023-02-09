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

  // Error library

  const errorLib = {
    getErr: "Error: could not retreive answer data from server.",
    postErr: "Error: could not post new answer data to server."
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
      setAnswers([...answers]); //TODO: check if works
    }
  };


  return (
    <AnswerContext.Provider value={{
      answers, setAnswers,
      loadingAnswers, setLoadingAnswers,
      answerFetchErrors, setAnswerFetchErrors,
      getAnswers, postAnswer
    }}>
      {children}
    </AnswerContext.Provider>
  );

};

export { AnswerProvider };
export default AnswerContext;