import FormLogin from "../forms/FormLogin";
import { Link } from "react-router-dom";
import LogoImage from "./LogoImage";

const HeaderNoUser = () => {
  return (
    <header className="header">
      <div className="contentWrap_global">
        <LogoImage />
        <div className="userButtonContainer">
          <FormLogin />
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderNoUser;
