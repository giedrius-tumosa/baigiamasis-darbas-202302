import { useNavigate } from "react-router-dom";
import styles from "./backButton.module.scss";

const BackButton = ({ textContent, goTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(goTo);
  };
  return (
    <button type="button" onClick={handleClick} className={styles.backbutton}>
      {textContent}
    </button>
  );
};

export default BackButton;
