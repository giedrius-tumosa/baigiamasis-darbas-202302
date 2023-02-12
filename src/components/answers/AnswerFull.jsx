import PostOwnerInfo from "../user/PostOwnerInfo";
import AnswerStatistics from "./AnswerStatistics";
import TimeStamp from "../questions/questionComponents/TimeStamp";
import AnswerEditDeleteButtons from "./AnswerEditDeleteButtons";
import QuestionContext from "../../store/QuestionContext";
import AnswerContext from "../../store/AnswerContext";
import { useContext, useEffect, useState } from "react";
import FormEditAnswer from "../forms/FormEditAnswer";
import styles from "./answer.module.scss";
// TODO: what if you dont get data for each item?

const AnswerFull = ({ answer }) => {
  // const { editMode, setEditMode } = useContext(AnswerContext);
  const [editMode, setEditMode] = useState(false);

  return (
    //TODO: ka daryti su delete mode
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
      {editMode && <FormEditAnswer answer={answer} editMode={editMode} setEditMode={setEditMode} />}
    </article>
  );
};

export default AnswerFull;
