import { createContext, useState } from "react";
import {
  getData, postData, patchData, deleteData
} from "../fetchApiFunctions";


const ENDPOINT_QUESTIONS = "http://localhost:5000/questions";


const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [questionFetchErrors, setQuestionFetchErrors] = useState({
    getErr: "",
    postErr: "",
    patchErr: "",
    deleteErr: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);


  // Error library

  const errorLib = {
    getErr: "Error: could not retreive question data from server.",
    postErr: "Error: could not post new question data to server.",
    patchErr: "Error: could send updates to the server.",
    deleteErr: "Error: could not delete post from server."
  };

  // Functions

  const getQuestions = async () => {
    try {
      setLoadingQuestions(true);
      const questionData = await getData(ENDPOINT_QUESTIONS, errorLib.getErr);
      setQuestions(questionData);
      setQuestionFetchErrors({ ...questionFetchErrors, getErr: "" });
    } catch (error) {
      setQuestionFetchErrors({ ...questionFetchErrors, getErr: error.message });
    } finally {
      setLoadingQuestions(false);
    }
  };

  const postQuestion = async (newQuestion) => {
    try {
      setQuestions([...questions, newQuestion]);
      await postData(ENDPOINT_QUESTIONS, newQuestion, errorLib.postErr);
      setQuestionFetchErrors({ ...questionFetchErrors, postErr: "" });
    } catch (error) {
      setQuestionFetchErrors({ ...questionFetchErrors, postErr: error.message });
      setQuestions([...questions]); //TODO: check if works
    }
  };

  const updateQuestion = async (question) => {
    try {
      const updatedQuestions = questions.map(el => {
        if (el.id === question.id) {
          return { ...el, ...question };
        }
        return el;
      });
      setQuestions(updatedQuestions);
      patchData(ENDPOINT_QUESTIONS, question, errorLib.patchErr);
      setQuestionFetchErrors({ ...questionFetchErrors, patchErr: "" });
    } catch (error) {
      setQuestionFetchErrors({ ...questionFetchErrors, patchErr: error.message });
      setQuestions([...questions]);
    }
  };

  const deleteQuestion = async (questionId) => {
    try {
      const updatedQuestions = questions.filter(quest => quest.id !== questionId);
      setQuestions(updatedQuestions);
      deleteData(ENDPOINT_QUESTIONS, questionId, errorLib.deleteErr);
      setQuestionFetchErrors({ ...questionFetchErrors, deleteErr: "" });
    } catch (error) {
      setQuestionFetchErrors({ ...questionFetchErrors, deleteErr: error.message });
      setQuestions(questions);
    }
  };

  return (
    <QuestionContext.Provider value={{
      questions, setQuestions,
      loadingQuestions, setLoadingQuestions,
      questionFetchErrors, setQuestionFetchErrors,
      getQuestions, postQuestion,
      updateQuestion, editMode,
      setEditMode, deleteQuestion,
      deleteMode, setDeleteMode
    }}>
      {children}
    </QuestionContext.Provider>
  );

};

export { QuestionProvider };
export default QuestionContext;