import UserPanel from "../user/UserPanel";
import FigureImage from "../global/FigureImage";

const HeaderUser = () => {
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
        <UserPanel />
      </div>
    </header>
  );
};

export default HeaderUser;
