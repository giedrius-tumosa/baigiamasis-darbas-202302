import QuestionFull from "./QuestionFull";
import AnswerList from "../answers/AnswerList";
import FormNewAnswer from "../forms/FormNewAnswer";
import UserContext from "../../store/UserContext";
import { useContext } from "react";

const QuestionSet = ({ question }) => {
  const { userLoggedin } = useContext(UserContext);
  return (
    <>
      <div className="questionSetWrap">
        <QuestionFull question={question} />
        <div className="postAnswerContainer">
          <h2>Post your answer:</h2>
          {userLoggedin ? <FormNewAnswer /> : <h5>Only logged in users can leave an answer.</h5>}
        </div>
        <AnswerList questionId={question.id} />
        <h2>Post your answer:</h2>
        <div className="postAnswerContainer">
          {userLoggedin ? <FormNewAnswer /> : <h5>Only logged in users can leave an answer.</h5>}
        </div>
      </div>
    </>
  );
};

export default QuestionSet;
