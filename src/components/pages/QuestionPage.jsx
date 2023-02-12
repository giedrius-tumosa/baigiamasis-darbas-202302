import { useParams } from "react-router-dom";
import QuestionContext from "../../store/QuestionContext";
import { useContext } from "react";
import QuestionSet from "../questions/QuestionSet";

const QuestionPage = () => {
  const { questionId } = useParams();
  const { questions } = useContext(QuestionContext);
  return (
    <>
      <main>
        <div className="contentWrap_global">
          <QuestionSet question={questions.find((el) => el.id === questionId)} />
        </div>
      </main>
    </>
  );
};

export default QuestionPage;
