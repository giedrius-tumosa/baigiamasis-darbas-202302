import { useContext, useState } from "react";
import UserContext from "../../store/UserContext";
import AnswerContext from "../../store/AnswerContext";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import styles from "./answerStatistics.module.scss";

const AnswerStatistics = ({ answer }) => {
  const { currentUser, userLoggedin } = useContext(UserContext);
  const { updateAnswer } = useContext(AnswerContext);

  const [currentUserLiked, setCurrentUserLiked] = useState(
    answer.likedBy.some((el) => el === currentUser.id)
  );
  const [currentUserDisliked, setCurrentUserDisliked] = useState(
    answer.dislikedBy.some((el) => el === currentUser.id)
  );

  const handleLike = () => {
    if (!currentUserLiked) {
      setCurrentUserLiked(true);
      setCurrentUserDisliked(false);
      const likedBy = [...answer.likedBy, currentUser.id];
      const dislikedBy = answer.dislikedBy.filter((el) => el !== currentUser.id);
      const updatedAnswer = {
        ...answer,
        likedBy: likedBy,
        dislikedBy: dislikedBy,
      };
      updateAnswer(updatedAnswer);
    } else {
      setCurrentUserLiked(false);
      const updatedAnswer = {
        ...answer,
        likedBy: answer.likedBy.filter((el) => el !== currentUser.id),
      };
      updateAnswer(updatedAnswer);
    }
  };

  const handleDislike = () => {
    if (!currentUserDisliked) {
      setCurrentUserLiked(false);
      setCurrentUserDisliked(true);
      const updatedAnswer = {
        ...answer,
        dislikedBy: [...answer.dislikedBy, currentUser.id],
        likedBy: answer.likedBy.filter((el) => el !== currentUser.id),
      };
      updateAnswer(updatedAnswer);
    } else {
      setCurrentUserDisliked(false);
      const updatedAnswer = {
        ...answer,
        dislikedBy: answer.dislikedBy.filter((el) => el !== currentUser.id),
      };
      updateAnswer(updatedAnswer);
    }
  };

  return (
    <>
      <div className={styles.answerStatistics}>
        <div className={styles.likeWrap}>
          <button
            className={`${currentUserLiked ? "opinionBtn-marked" : "opinionBtn"} likeBtn`}
            type="button"
            onClick={handleLike}
            disabled={answer.ownerId === currentUser.id || !userLoggedin}
          >
            <FaThumbsUp />
          </button>
          <span title="Number of likes" className="likeNumber">
            {answer.likedBy.length}
          </span>
        </div>
        <div className={styles.dislikeWrap}>
          <button
            className={`${currentUserDisliked ? "opinionBtn-marked" : "opinionBtn"} dislikeBtn`}
            type="button"
            onClick={handleDislike}
            disabled={answer.ownerId === currentUser.id || !userLoggedin}
          >
            <FaThumbsDown />
          </button>
          <span title="Number of dislikes" className="dislikeNumber">
            {answer.dislikedBy.length}
          </span>
        </div>
      </div>
    </>
  );
};

export default AnswerStatistics;
