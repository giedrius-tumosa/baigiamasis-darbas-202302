import { useParams } from "react-router-dom";
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
// TODO: Back button
export default QuestionPage;
