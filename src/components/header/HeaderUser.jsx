import UserPanel from "../user/UserPanel";
import FigureImage from "../global/FigureImage";
import LogoImage from "./LogoImage";

const HeaderUser = () => {
  return (
    <header
      className="header"
      style={{ display: "flex", gap: "0.5rem", justifyContent: "space-between" }}
    >
      <LogoImage />
      <div className="userButtonContainer" style={{ display: "flex", gap: "0.5rem" }}>
        <UserPanel />
      </div>
    </header>
  );
};

export default HeaderUser;
