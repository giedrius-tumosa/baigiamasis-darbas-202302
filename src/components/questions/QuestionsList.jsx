import { useContext, useEffect } from "react";
import QuestionContext from "../../store/QuestionContext";
import AnswerContext from "../../store/AnswerContext";
import QuestionSnippet from "../questions/QuestionSnippet";
import { useNavigate } from "react-router-dom";
import UserContext from "../../store/UserContext";

const QuestionsList = () => {
  const { questions, loadingQuestions, getQuestions, questionSort } = useContext(QuestionContext);
  const { answers, getAnswers } = useContext(AnswerContext);
  const { userLoggedin } = useContext(UserContext);
  const navigate = useNavigate();

  const questionsByNewest = () => {
    const arrayToSort = [...questions];
    arrayToSort.sort((a, b) => {
      return new Date(b.postTimeStamp) - new Date(a.postTimeStamp);
    });
    return arrayToSort;
  };

  const questionsByMostAnswered = () => {
    const arrayToSort = [...questions].map((el) => {
      return {
        ...el,
        numOfAnswers: answers.filter((answ) => answ.questionId === el.id).length,
      };
    });
    arrayToSort.sort((a, b) => {
      return b.numOfAnswers - a.numOfAnswers;
    });
    return arrayToSort;
  };

  const questionsByLeastAnswered = () => {
    const arrayToSort = [...questions].map((el) => {
      return {
        ...el,
        numOfAnswers: answers.filter((answ) => answ.questionId === el.id).length,
      };
    });
    arrayToSort.sort((a, b) => {
      return a.numOfAnswers - b.numOfAnswers;
    });
    return arrayToSort;
  };

  const handleAsk = () => {
    navigate("/new_question");
  };

  useEffect(() => {
    getQuestions();
    getAnswers();
  }, []);

  return (
    <>
      <section style={{ display: "flex", gap: "1rem", flexDirection: "column", padding: "1rem" }}>
        <div className="newQuestionButton" style={{ display: "flex", gap: "1rem" }}>
          <h3>Ask a new question: </h3>
          {userLoggedin ? (
            <button type="button" onClick={handleAsk}>
              Ask
            </button>
          ) : (
            <span>Only logged in users can ask questions.</span>
          )}
        </div>
        <p>{loadingQuestions && "Loading..."}</p>
        {!loadingQuestions &&
          (questionSort === "" || questionSort === "oldestFirst") &&
          questions.map((question) => <QuestionSnippet key={question.id} question={question} />)}
        {!loadingQuestions &&
          questionSort === "newestFirst" &&
          questionsByNewest().map((question) => (
            <QuestionSnippet key={question.id} question={question} />
          ))}
        {!loadingQuestions &&
          questionSort === "mostAnswered" &&
          questionsByMostAnswered().map((question) => (
            <QuestionSnippet key={question.id} question={question} />
          ))}
        {!loadingQuestions &&
          questionSort === "leastAnswered" &&
          questionsByLeastAnswered().map((question) => (
            <QuestionSnippet key={question.id} question={question} />
          ))}
      </section>
    </>
  );
};

export default QuestionsList;
