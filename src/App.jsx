import { useEffect, useContext } from "react";
import "./styles/App.scss";
import UserContext from "./store/UserContext";
import { Routes, Route } from "react-router-dom";
import HomeUser from "./components/pages/HomeUser";
import NotFound from "./components/pages/NotFound";
import QuestionPage from "./components/pages/QuestionPage";

function App() {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/questions/:questionId" element={<QuestionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
