import HeaderNoUser from "../header/HeaderNoUser";
import QuestionList from "../questions/QuestionsList";
import Filter from "../filter/Filter";
import { useContext, useEffect } from "react";
import UserContext from "../../store/UserContext";
import { useNavigate } from "react-router-dom";

const HomeNoUser = () => {
  const { userLoggedin, currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    userLoggedin && navigate(`/users/${currentUser.id}`);
  }, []);

  return (
    <>
      <HeaderNoUser />
      <aside className="aside">
        <Filter />
      </aside>
      <main className="main">
        <QuestionList />
      </main>
      {/* //TODO: do i need footer */}
    </>
  );
};

export default HomeNoUser;
