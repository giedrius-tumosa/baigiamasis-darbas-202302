import { useContext, useEffect } from "react";
import QuestionContext from "../../store/QuestionContext";
import AnswerContext from "../../store/AnswerContext";
import AnswerFull from "./AnswerFull";

const AnswerList = ({ questionId }) => {
  const { answers, loadingAnswers } = useContext(AnswerContext);

  return (
    <>
      <section style={{ display: "flex", gap: "1rem", flexDirection: "column", padding: "1rem" }}>
        <p>{loadingAnswers && "Loading..."}</p>
        {!loadingAnswers &&
          answers.map(
            (answer) =>
              answer.questionId === questionId && <AnswerFull key={answer.id} answer={answer} />
          )}
      </section>
    </>
  );
};

export default AnswerList;
