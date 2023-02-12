import UserPanel from "../user/UserPanel";
import FigureImage from "../global/FigureImage";
import LogoImage from "./LogoImage";

const HeaderUser = () => {
  return (
    <header className="header">
      <div className="contentWrap_global">
        <LogoImage />
        <div className="userButtonContainer">
          <UserPanel />
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
