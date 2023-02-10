import { useContext, useEffect } from "react";
import QuestionContext from "../../store/QuestionContext";

const Filter = () => {
  const { questionSort, setQuestionSort, filterWithAnswers, setFilterWithAnswers } =
    useContext(QuestionContext);

  return (
    <>
      <div className="filterWrap">
        <div className="filterBtn filterBtn-newestFirst">
          <button
            type="button"
            onClick={() => setQuestionSort(questionSort !== "newestFirst" ? "newestFirst" : "")}
          >
            newestFirst
          </button>
        </div>
        <div className="filterBtn filterBtn-oldestFirst">
          <button type="button" onClick={() => setQuestionSort("")}>
            oldestFirst
          </button>
        </div>
        <div className="filterBtn filterBtn-mostAnswered">
          <button
            type="button"
            onClick={() => setQuestionSort(questionSort !== "mostAnswered" ? "mostAnswered" : "")}
          >
            mostAnswered
          </button>
        </div>
        <div className="filterBtn filterBtn-leastAnswered">
          <button
            type="button"
            onClick={() => setQuestionSort(questionSort !== "leastAnswered" ? "leastAnswered" : "")}
          >
            leastAnswered
          </button>
        </div>
        <div className="filterWithAnswers">
          <label htmlFor="filterWithAnswers">With answers only:</label>
          <input
            type="checkbox"
            name="filterWithAnswers"
            id="filterWithAnswers"
            onChange={() => setFilterWithAnswers(!filterWithAnswers)}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
