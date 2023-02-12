import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../store/UserContext";
import FigureImage from "../global/FigureImage";
import styles from "./userPanel.module.scss";

const UserPanel = () => {
  const { currentUser, setCurrentUser, userLoggedin, setUserLoggedin, deleteFromSessionStorage } =
    useContext(UserContext);
  const navigate = useNavigate();
  // TODO: kas bus jeigu prisijunges useris suves kito userio id i url? ka rodys? ar nereikia protektinti sito
  const handleLogout = () => {
    setUserLoggedin(false);
    setCurrentUser({});
    deleteFromSessionStorage("askMeUser");
    navigate("/");
  };

  return (
    <div className={styles.userPanel}>
      <FigureImage
        className={styles.profileImgSmall}
        attributes={{
          width: 40,
          height: 40,
          src: currentUser.userProfileImgUrl,
          alt: "User profile image.",
        }}
      />
      <span className={styles.userGreeting}>Hi, {currentUser.userName}!</span>
      <div className={styles.userPanel_buttons}>
        <button className={styles.btnLogout} type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
//TODO: kur deti getQuestions? gal i app?
export default UserPanel;
