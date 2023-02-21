import { useContext } from "react";
import QuestionContext from "../../store/QuestionContext";
import styles from "./filter.module.scss";

const Filter = () => {
  const {
    questionSort,
    setQuestionSort,
    filterWithAnswers,
    setFilterWithAnswers,
    setFilterNoAnswers,
    filterNoAnswers,
  } = useContext(QuestionContext);

  return (
    <>
      <div className={styles.filterWrap}>
        <h2>Sort questions:</h2>
        <div className={styles.filter}>
          <label htmlFor="filterWithAnswers">With answers only:</label>
          <input
            type="checkbox"
            name="filterWithAnswers"
            id="filterWithAnswers"
            disabled={filterNoAnswers}
            onChange={() => setFilterWithAnswers(!filterWithAnswers)}
          />
        </div>
        <div className={styles.filter}>
          <label htmlFor="filterNoAnswers">No answers only:</label>
          <input
            type="checkbox"
            name="filterNoAnswers"
            id="filterNoAnswers"
            disabled={filterWithAnswers}
            onChange={() => setFilterNoAnswers(!filterNoAnswers)}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={`${styles.filterBtn} ${styles.filterBtn_newestFirst}`}>
            <button
              type="button"
              onClick={() => setQuestionSort(questionSort !== "newestFirst" ? "newestFirst" : "")}
            >
              Newest Up
            </button>
          </div>
          <div className={`${styles.filterBtn} ${styles.filterBtn_oldestFirst}`}>
            <button type="button" onClick={() => setQuestionSort("")}>
              Oldest Up
            </button>
          </div>
          <div className={`${styles.filterBtn} ${styles.filterBtn_mostAnswered}`}>
            <button
              type="button"
              onClick={() => setQuestionSort(questionSort !== "mostAnswered" ? "mostAnswered" : "")}
            >
              Most Answered
            </button>
          </div>
          <div className={`${styles.filterBtn} ${styles.filterBtn_leastAnswered}`}>
            <button
              type="button"
              onClick={() =>
                setQuestionSort(questionSort !== "leastAnswered" ? "leastAnswered" : "")
              }
            >
              Least Answered
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
