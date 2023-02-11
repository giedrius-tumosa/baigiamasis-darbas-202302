import { useEffect, useContext } from "react";
import "./styles/App.scss";
import UserContext from "./store/UserContext";
import { Routes, Route } from "react-router-dom";
import HomeNoUser from "./components/pages/HomeNoUser";
import NotFound from "./components/pages/NotFound";
import QuestionPage from "./components/pages/QuestionPage";
import RegistrationPage from "./components/pages/RegistrationPage";
import HomeUser from "./components/pages/HomeUser";
import UserOnlyContent from "./components/pages/UserOnlyContent";
import NewQuestionPage from "./components/pages/NewQuestionPage";

function App() {
  const { getUsers, setCurrentUser, setUserLoggedin } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  //TODO: kur padeti getUsers? logine?

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeNoUser />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/questions/:questionId" element={<QuestionPage />} />
        <Route element={<UserOnlyContent />}>
          <Route path="/users/:userId" element={<HomeUser />} />
          <Route path="/new_question" element={<NewQuestionPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
