import { useContext, useEffect } from "react";
import QuestionContext from "../../store/QuestionContext";
import AnswerContext from "../../store/AnswerContext";
import AnswerFull from "./AnswerFull";
import styles from "./answerList.module.scss";

const AnswerList = ({ questionId }) => {
  const { answers, loadingAnswers } = useContext(AnswerContext);

  return (
    <>
      <section className={styles.answerList}>
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
