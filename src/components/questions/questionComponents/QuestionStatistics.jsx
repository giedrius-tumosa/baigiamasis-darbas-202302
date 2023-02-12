import { useContext, useState } from "react";
import UserContext from "../../../store/UserContext";
import QuestionContext from "../../../store/QuestionContext";
import AnswerContext from "../../../store/AnswerContext";
import styles from "./questionStatistics.module.scss";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const QuestionStatistics = ({ question }) => {
  const { currentUser, userLoggedin } = useContext(UserContext);
  const { answers } = useContext(AnswerContext);
  const { updateQuestion } = useContext(QuestionContext);

  const [currentUserLiked, setCurrentUserLiked] = useState(
    question.likedBy.some((el) => el === currentUser.id)
  );
  const [currentUserDisliked, setCurrentUserDisliked] = useState(
    question.dislikedBy.some((el) => el === currentUser.id)
  );

  const handleLike = () => {
    if (!currentUserLiked) {
      setCurrentUserLiked(true);
      setCurrentUserDisliked(false);

      const likedBy = [...question.likedBy, currentUser.id];
      const dislikedBy = question.dislikedBy.filter((el) => el !== currentUser.id);
      const updatedQuestion = {
        ...question,
        likedBy: likedBy,
        dislikedBy: dislikedBy,
      };
      updateQuestion(updatedQuestion);
    } else {
      setCurrentUserLiked(false);
      const updatedQuestion = {
        ...question,
        likedBy: question.likedBy.filter((el) => el !== currentUser.id),
      };
      updateQuestion(updatedQuestion);
    }
  };

  const handleDislike = () => {
    if (!currentUserDisliked) {
      setCurrentUserLiked(false);
      setCurrentUserDisliked(true);
      const updatedQuestion = {
        ...question,
        dislikedBy: [...question.dislikedBy, currentUser.id],
        likedBy: question.likedBy.filter((el) => el !== currentUser.id),
      };
      updateQuestion(updatedQuestion);
    } else {
      setCurrentUserDisliked(false);
      const updatedQuestion = {
        ...question,
        dislikedBy: question.dislikedBy.filter((el) => el !== currentUser.id),
      };
      updateQuestion(updatedQuestion);
    }
  };

  return (
    <>
      <div className={styles.questionStatistics}>
        <div className={styles.likeWrap}>
          <button
            className={`${currentUserLiked ? "opinionBtn-marked" : "opinionBtn"} likeBtn`}
            type="button"
            onClick={handleLike}
            disabled={question.ownerId === currentUser.id || !userLoggedin}
            title="Like button"
          >
            <FaThumbsUp />
          </button>
          <span title="Number of likes" className={styles.likeNumber}>
            {question.likedBy.length}
          </span>
        </div>
        <div className={styles.dislikeWrap}>
          <button
            className={`${currentUserDisliked ? "opinionBtn-marked" : "opinionBtn"} dislikeBtn`}
            type="button"
            onClick={handleDislike}
            disabled={question.ownerId === currentUser.id || !userLoggedin}
            title="Dislike button"
          >
            <FaThumbsDown />
          </button>
          <span title="Number of dislikes" className={styles.dislikeNumber}>
            {question.dislikedBy.length}
          </span>
        </div>
        <div className={styles.numOfAnswers}>
          <span title="Number of answers">{`Answers: ${
            answers.filter((answ) => answ.questionId === question.id).length
          }`}</span>
        </div>
      </div>
    </>
  );
};

export default QuestionStatistics;
