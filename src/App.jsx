import "./styles/App.scss";
import FormLogin from "./components/forms/FormLogin";
import FormRegister from "./components/forms/FormRegister";
import FormNewQuestion from "./components/forms/FormNewQuestion";
import FormNewAnswer from "./components/forms/FormNewAnswer";

function App() {
  return (
    <>
      <FormLogin />
      <FormRegister />
      <FormNewQuestion />
      <FormNewAnswer />
    </>
  );
}

export default App;
