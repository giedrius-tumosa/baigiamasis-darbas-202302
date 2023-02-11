import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormRegister from "../forms/FormRegister";

const RegistrationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.getItem("askMeUser") &&
      setTimeout(() => {
        navigate("/");
      }, 3000);
  }, []);

  return (
    <>
      {!sessionStorage.getItem("askMeUser") && <FormRegister />}
      {sessionStorage.getItem("askMeUser") && (
        <p>You are an existing user. Redirecting to your home page.</p>
      )}
    </>
  );
};

export default RegistrationPage;
