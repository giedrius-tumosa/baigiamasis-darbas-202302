import FigureImage from "../global/FigureImage";
import Heading from "../global/Heading";
import FormLogin from "../forms/FormLogin";
import { Link } from "react-router-dom";

const HeaderNoUser = () => {
  return (
    <header
      className="header"
      style={{ display: "flex", gap: "0.5rem", justifyContent: "space-between" }}
    >
      <FigureImage
        className="logoImage"
        attributes={{
          src: "https://www.svgrepo.com/show/230797/question.svg",
          width: 50,
          height: "auto",
          alt: "COmpany logo image.",
        }}
      />
      <div className="userButtonContainer" style={{ display: "flex", gap: "0.5rem" }}>
        <FormLogin />
        <Link to="/register">Register</Link>
      </div>
    </header>
  );
};

export default HeaderNoUser;
