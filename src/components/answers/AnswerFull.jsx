import PostOwnerInfo from "../user/PostOwnerInfo";
import AnswerStatistics from "./AnswerStatistics";
import TimeStamp from "../questions/questionComponents/TimeStamp";
import AnswerEditDeleteButtons from "./AnswerEditDeleteButtons";
import QuestionContext from "../../store/QuestionContext";
import AnswerContext from "../../store/AnswerContext";
import { useContext, useEffect, useState } from "react";
import FormEditAnswer from "../forms/FormEditAnswer";
// TODO: what if you dont get data for each item?

const AnswerFull = ({ answer }) => {
  // const { editMode, setEditMode } = useContext(AnswerContext);
  const [editMode, setEditMode] = useState(false);

  return (
    //TODO: ka daryti su delete mode
    <article
      className="answer-snip"
      style={{
        //TODO: remove inner styles
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        border: "1px solid grey",
        padding: "0.5rem",
      }}
    >
      <header
        className="answer-snip__header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <PostOwnerInfo ownerId={answer.ownerId} />
        <TimeStamp postTimeStamp={answer.postTimeStamp} editTimeStamp={answer.editTimeStamp} />
      </header>
      <main className="answer-snip__main">
        <div className="answerContentWrap">
          <h3>{answer.title}</h3>
          <p>{answer.description}</p>
        </div>
      </main>
      <footer
        className="answer-snip__footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <AnswerStatistics answer={answer} />
        <AnswerEditDeleteButtons answer={answer} editMode={editMode} setEditMode={setEditMode} />
      </footer>
      {editMode && <FormEditAnswer answer={answer} editMode={editMode} setEditMode={setEditMode} />}
    </article>
  );
};

export default AnswerFull;
