import { useContext } from "react";
import UserContext from "../../store/UserContext";
import AnswerContext from "../../store/AnswerContext";
import styles from "./answerEditDeleteButtons.module.scss";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

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
        <div className={styles.answerEditDeleteBtns}>
          <button
            onClick={handleEdit}
            className={editMode ? "btnEdit_disabled" : "btnEdit"}
            type="button"
            disabled={editMode}
            title="Edit"
          >
            <FaEdit />
          </button>
          <button onClick={handleDelete} className="btnDelete" type="button" title="Delete">
            <FaTrashAlt />
          </button>
        </div>
      )}
    </>
  );
};

export default AnswerEditDeleteButtons;
