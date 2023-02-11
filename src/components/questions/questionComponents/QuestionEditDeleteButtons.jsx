import { useContext, useEffect } from "react";
import UserContext from "../../../store/UserContext";
import QuestionContext from "../../../store/QuestionContext";
import { useNavigate } from "react-router-dom";

const QuestionEditDeleteButtons = ({ question = {} }) => {
  const { editMode, setEditMode, deleteQuestion, setDeleteMode } = useContext(QuestionContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    setEditMode(true);
  };
  const handleDelete = () => {
    navigate(-1);
    setEditMode(false);
    deleteQuestion(question.id);
    setDeleteMode(true);
  };

  return (
    <>
      {currentUser.id === question.ownerId && (
        <div className="questionEditDeleteBtns" style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={handleEdit} className="btnEdit" type="button" disabled={editMode}>
            Edit
          </button>
          <button onClick={handleDelete} className="btnDelete" type="button">
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default QuestionEditDeleteButtons;
