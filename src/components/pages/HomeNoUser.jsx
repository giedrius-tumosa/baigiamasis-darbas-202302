import HeaderNoUser from "../header/HeaderNoUser";
import QuestionList from "../questions/QuestionsList";
import Filter from "../filter/Filter";
import { useContext, useEffect } from "react";
import UserContext from "../../store/UserContext";
import { useNavigate } from "react-router-dom";

const HomeNoUser = () => {
  const { userLoggedin, currentUser, setCurrentUser, setUserLoggedin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    userLoggedin && navigate(`/users/${currentUser.id}`);
  }, [userLoggedin]);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("askMeUser"));
    if (userData) {
      setCurrentUser(userData);
      setUserLoggedin(true);
    }
  }, []);

  return (
    <>
      <HeaderNoUser />
      <div className="contentWrap_global">
        <aside className="aside">
          <Filter />
        </aside>
        <main className="main">
          <QuestionList />
        </main>
      </div>
    </>
  );
};

export default HomeNoUser;
