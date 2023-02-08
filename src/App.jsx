import { useEffect, useContext } from "react";
import "./styles/App.scss";
import UserContext from "./store/UserContext";
import FormRegister from "./components/forms/FormRegister";

function App() {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <FormRegister />
    </>
  );
}

export default App;
