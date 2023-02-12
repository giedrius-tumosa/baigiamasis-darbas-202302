import QuestionFull from "./QuestionFull";
import AnswerList from "../answers/AnswerList";
import FormNewAnswer from "../forms/FormNewAnswer";
import UserContext from "../../store/UserContext";
import { useContext } from "react";

const QuestionSet = ({ question }) => {
  const { userLoggedin } = useContext(UserContext);
  return (
    <>
      {question && (
        <div className="questionSetWrap">
          <QuestionFull question={question} />
          <AnswerList questionId={question.id} />

          <div className="formSection formNewAnswerSection">
            <h2>Post your answer:</h2>
            {userLoggedin ? <FormNewAnswer /> : <p>Only logged in users can leave an answer.</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionSet;
