import { useContext, useEffect, useState } from "react";
import UserContext from "../../../store/UserContext";
import QuestionContext from "../../../store/QuestionContext";

const QuestionStatistics = ({ question }) => {
  const { currentUser } = useContext(UserContext);
  const { questions, setQuestions, updateQuestion } = useContext(QuestionContext);

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
        dislikedBy: question.likedBy.filter((el) => el !== currentUser.id),
      };
      updateQuestion(updatedQuestion);
    }
  };

  return (
    <>
      <div className="questionStatistics" style={{ display: "flex", gap: "0.5rem" }}>
        <div className="likeWrap">
          <button
            className={`${currentUserLiked ? "opinionBtn-marked" : "opinionBtn"}`}
            type="button"
            onClick={handleLike}
            disabled={question.ownerId === currentUser.id}
          >
            Like
          </button>
          <span title="Number of likes" className="likeNumber">
            {question.likedBy.length}
          </span>
        </div>
        <div className="dislikeWrap">
          <button
            className={`${currentUserDisliked ? "opinionBtn-marked" : "opinionBtn"}`}
            type="button"
            onClick={handleDislike}
            disabled={question.ownerId === currentUser.id}
          >
            Dislike
          </button>
          <span title="Number of dislikes" className="dislikeNumber">
            {question.dislikedBy.length}
          </span>
        </div>
      </div>
    </>
  );
};

export default QuestionStatistics;
