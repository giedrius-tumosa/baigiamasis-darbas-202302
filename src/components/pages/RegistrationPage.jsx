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
      <main>
        <div className="formSection">
          {!sessionStorage.getItem("askMeUser") && <FormRegister />}
          {sessionStorage.getItem("askMeUser") && (
            <p className="formErrorMessage">
              You are an existing user. Redirecting to your home page.
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default RegistrationPage;
