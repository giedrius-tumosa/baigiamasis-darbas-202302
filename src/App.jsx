import { useEffect, useContext } from "react";
import "./styles/App.scss";
import UserContext from "./store/UserContext";
import QuestionFull from "./components/questions/QuestionFull";

function App() {
  const { getUsers, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <QuestionFull />
    </>
  );
}

export default App;
