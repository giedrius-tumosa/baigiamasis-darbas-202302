import OwnerInfo from "./questionComponents/OwnerInfo";
import QuestionStatistics from "./questionComponents/QuestionStatistics";
import TimeStamp from "./questionComponents/TimeStamp";
import EditDeleteButtons from "./questionComponents/EditDeleteButtons";
import QuestionContext from "../../store/QuestionContext";
import { useContext } from "react";
import FormNewQuestion from "../forms/FormEditQuestion";
// TODO: what if you dont get data for each item?

const QuestionFull = ({ question }) => {
  const { editMode, setEditMode, deleteMode, setDeleteMode } = useContext(QuestionContext);
  return (
    //ka daryti su delete mode
    <article
      className="question-snip"
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
        className="question-snip__header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <OwnerInfo ownerId={question.ownerId} />
        <TimeStamp postTimeStamp={question.postTimeStamp} editTimeStamp={question.editTimeStamp} />
      </header>
      <main className="question-snip__main">
        <div className="questionContentWrap">
          <h3>{question.title}</h3>
          <p>{question.description}</p>
        </div>
      </main>
      <footer
        className="question-snip__footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <QuestionStatistics question={question} />
        <EditDeleteButtons question={question} />
      </footer>
      {editMode && <FormNewQuestion question={question} />}
    </article>
  );
};

export default QuestionFull;
