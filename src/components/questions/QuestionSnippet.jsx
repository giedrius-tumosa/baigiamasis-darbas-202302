import PostOwnerInfo from "../user/PostOwnerInfo";
import QuestionStatistics from "./questionComponents/QuestionStatistics";
import TimeStamp from "./questionComponents/TimeStamp";
import { Link } from "react-router-dom";
import AnswerContext from "../../store/AnswerContext";
import QuestionContext from "../../store/QuestionContext";
import { useContext } from "react";
import styles from "./question.module.scss";

// TODO: what if you dont get data for each item?

const QuestionSnippet = ({ question }) => {
  const { filterWithAnswers } = useContext(QuestionContext);
  const { answers } = useContext(AnswerContext);

  return (
    !(
      filterWithAnswers && answers.filter((answ) => answ.questionId === question.id).length === 0
    ) && (
      <article className={styles.question}>
        <header className={styles.question__header}>
          <PostOwnerInfo ownerId={question.ownerId} />
          <TimeStamp
            postTimeStamp={question.postTimeStamp}
            editTimeStamp={question.editTimeStamp}
          />
        </header>
        <main className={styles.question__main}>
          <div className={styles.questionContentWrap}>
            <Link to={`/questions/${question.id}`}>
              <h3 className={styles.question_title}>{question.title}</h3>
            </Link>
            <p className={styles.question_description}>{`${question.description.slice(
              0,
              100
            )}...`}</p>
          </div>
        </main>
        <footer className={styles.question__footer}>
          <QuestionStatistics question={question} />
        </footer>
      </article>
    )
  );
};

export default QuestionSnippet;
