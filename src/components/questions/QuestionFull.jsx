import OwnerInfo from "./questionComponents/OwnerInfo";
import QuestionStatistics from "./questionComponents/QuestionStatistics";
import TimeStamp from "./questionComponents/TimeStamp";
// TODO: what if you dont get data for each item?
const demo = {
  id: "9KoOkzM9Oza07NoOgH6jd",
  ownerId: "_RNFGVNnp8rDjtprPf8rX",
  likedBy: [],
  dislikedBy: [],
  isEdited: false,
  editTimeStamp: "2023-02-10 00:49:21",
  postTimeStamp: "2023-02-08 14:49:21",
  title: "Bobby Kotick warns UK risks ‘becoming Death Valley’ if it blocks Microsoft deal",
  description:
    "Activision Blizzard CEO Bobby Kotick has claimed that blocking Microsoft’s acquisition of the Call of Duty publisher would represent a major blow to the UK government’s ambition of becoming a technology superpower.",
};

const QuestionFull = ({ question = demo }) => {
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
          <h3>{question.title}</h3>
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

export default QuestionFull;
