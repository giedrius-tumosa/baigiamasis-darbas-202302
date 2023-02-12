import FigureImage from "../global/FigureImage";
import Heading from "../global/Heading";
import FormLogin from "../forms/FormLogin";
import { Link } from "react-router-dom";
import LogoImage from "./LogoImage";

const HeaderNoUser = () => {
  return (
    <header
      className="header"
      style={{ display: "flex", gap: "0.5rem", justifyContent: "space-between" }}
    >
      <LogoImage />
      <div className="userButtonContainer" style={{ display: "flex", gap: "0.5rem" }}>
        <FormLogin />
        <Link to="/register">Register</Link>
      </div>
    </header>
  );
};

export default HeaderNoUser;
