import { useContext } from "react";
import UserContext from "../../store/UserContext";
import AnswerContext from "../../store/AnswerContext";

const AnswerEditDeleteButtons = ({ answer, editMode, setEditMode }) => {
  const { deleteAnswer } = useContext(AnswerContext);
  const { currentUser } = useContext(UserContext);

  const handleEdit = () => {
    setEditMode(true);
  };
  const handleDelete = () => {
    setEditMode(false);
    deleteAnswer(answer.id);
  };

  return (
    <>
      {currentUser.id === answer.ownerId && (
        <div className="answerEditDeleteBtns" style={{ display: "flex", gap: "0.5rem" }}>
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

export default AnswerEditDeleteButtons;
