import QuestionFull from "./QuestionFull";
import AnswerList from "../answers/AnswerList";
import FormNewAnswer from "../forms/FormNewAnswer";

const QuestionSet = ({ question }) => {
  return (
    <>
      <div className="questionSetWrap">
        <QuestionFull question={question} />
        <FormNewAnswer />
        <AnswerList questionId={question.id} />
      </div>
    </>
  );
};

export default QuestionSet;
