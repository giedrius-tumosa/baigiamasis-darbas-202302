import PostOwnerInfo from "../user/PostOwnerInfo";
import QuestionStatistics from "./questionComponents/QuestionStatistics";
import TimeStamp from "./questionComponents/TimeStamp";
import QuestionEditDeleteButtons from "./questionComponents/QuestionEditDeleteButtons";
import QuestionContext from "../../store/QuestionContext";
import { useContext } from "react";
import FormEditQuestion from "../forms/FormEditQuestion";
import styles from "./question.module.scss";

const QuestionFull = ({ question }) => {
  const { editMode } = useContext(QuestionContext);
  return (
    <article className={styles.question}>
      <header className={styles.question__header}>
        <PostOwnerInfo ownerId={question.ownerId} />
        <TimeStamp postTimeStamp={question.postTimeStamp} editTimeStamp={question.editTimeStamp} />
      </header>
      <main className={styles.question__main}>
        <div className={styles.questionContentWrap}>
          <h3 className={styles.question_title_full}>{question.title}</h3>
          <p className={styles.question_description}>{question.description}</p>
        </div>
      </main>
      <footer className={styles.question__footer}>
        <QuestionStatistics question={question} />
        <QuestionEditDeleteButtons question={question} />
      </footer>
      <div className="formSection formEditQuestion">
        {editMode && <FormEditQuestion question={question} />}
      </div>
    </article>
  );
};

export default QuestionFull;
