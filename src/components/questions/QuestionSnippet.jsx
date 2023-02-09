import OwnerInfo from "./questionComponents/OwnerInfo";
import QuestionStatistics from "./questionComponents/QuestionStatistics";
import TimeStamp from "./questionComponents/TimeStamp";
import { Link } from "react-router-dom";

// TODO: what if you dont get data for each item?

const QuestionSnippet = ({ question }) => {
  return (
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
          <Link to={`/questions/${question.id}`}>
            <h3>{question.title}</h3>
          </Link>
          <p>{`${question.description.slice(0, 100)}...`}</p>
        </div>
      </main>
      <footer
        className="question-snip__footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <QuestionStatistics question={question} />
      </footer>
    </article>
  );
};

export default QuestionSnippet;
