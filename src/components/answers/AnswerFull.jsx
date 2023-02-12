import PostOwnerInfo from "../user/PostOwnerInfo";
import AnswerStatistics from "./AnswerStatistics";
import TimeStamp from "../questions/questionComponents/TimeStamp";
import AnswerEditDeleteButtons from "./AnswerEditDeleteButtons";
import { useState } from "react";
import FormEditAnswer from "../forms/FormEditAnswer";
import styles from "./answer.module.scss";

const AnswerFull = ({ answer }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <article className={styles.answer}>
      <header className={styles.answer__header}>
        <PostOwnerInfo ownerId={answer.ownerId} />
        <TimeStamp postTimeStamp={answer.postTimeStamp} editTimeStamp={answer.editTimeStamp} />
      </header>
      <main className="answer__main">
        <div className="answerContentWrap">
          <h3>{answer.title}</h3>
          <p>{answer.description}</p>
        </div>
      </main>
      <footer className={styles.answer__footer}>
        <AnswerStatistics answer={answer} />
        <AnswerEditDeleteButtons answer={answer} editMode={editMode} setEditMode={setEditMode} />
      </footer>
      <div className="formSection formEditAnswer">
        {editMode && (
          <FormEditAnswer answer={answer} editMode={editMode} setEditMode={setEditMode} />
        )}
      </div>
    </article>
  );
};

export default AnswerFull;
