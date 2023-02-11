import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../store/UserContext";
import FigureImage from "../global/FigureImage";

const UserPanel = () => {
  const { currentUser, setCurrentUser, userLoggedin, setUserLoggedin } = useContext(UserContext);
  const navigate = useNavigate();
  // TODO: kas bus jeigu prisijunges useris suves kito userio id i url? ka rodys? ar nereikia protektinti sito
  const handleLogout = () => {
    setUserLoggedin(false);
    setCurrentUser({});
    navigate("/");
  };

  return (
    <div className="userPanel" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <FigureImage
        className="profileImgSmall"
        attributes={{
          width: 40,
          height: 40,
          src: currentUser.userProfileImgUrl,
          alt: "User profile image.",
        }}
      />
      <span className="userGreeting">Hi, {currentUser.userName}</span>
      <div className="userPanel-buttons">
        <button className="btnLogout" type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPanel;
