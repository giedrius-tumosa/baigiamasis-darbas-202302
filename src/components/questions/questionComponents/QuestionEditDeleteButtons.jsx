import { useContext } from "react";
import UserContext from "../../../store/UserContext";
import QuestionContext from "../../../store/QuestionContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import styles from "./questionEditDeleteButtons.module.scss";

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
        <div className={styles.questionEditDeleteBtns}>
          <button
            onClick={handleEdit}
            className="btnEdit"
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

export default QuestionEditDeleteButtons;
