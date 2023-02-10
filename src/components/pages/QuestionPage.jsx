import { useParams } from "react-router-dom";
import QuestionFull from "../questions/QuestionFull";
import QuestionContext from "../../store/QuestionContext";
import { useContext } from "react";
import QuestionSet from "../questions/QuestionSet";

const QuestionPage = () => {
  const { questionId } = useParams();
  const { questions } = useContext(QuestionContext);
  return (
    <>
      <h2>QuestionPage {questionId}</h2>
      <QuestionSet question={questions.find((el) => el.id === questionId)} />
    </>
  );
};

export default QuestionPage;
