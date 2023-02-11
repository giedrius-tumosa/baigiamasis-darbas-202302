import PostOwnerInfo from "../user/PostOwnerInfo";
import QuestionStatistics from "./questionComponents/QuestionStatistics";
import TimeStamp from "./questionComponents/TimeStamp";
import { Link } from "react-router-dom";
import AnswerContext from "../../store/AnswerContext";
import QuestionContext from "../../store/QuestionContext";
import { useContext } from "react";

// TODO: what if you dont get data for each item?

const QuestionSnippet = ({ question }) => {
  const { filterWithAnswers } = useContext(QuestionContext);
  const { answers } = useContext(AnswerContext);

  return (
    !(
      filterWithAnswers && answers.filter((answ) => answ.questionId === question.id).length === 0
    ) && (
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
          <PostOwnerInfo ownerId={question.ownerId} />
          <TimeStamp
            postTimeStamp={question.postTimeStamp}
            editTimeStamp={question.editTimeStamp}
          />
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
    )
  );
};

export default QuestionSnippet;
