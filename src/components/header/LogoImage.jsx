import FigureImage from "../global/FigureImage";
import styles from "./logoImage.module.scss";
import { Link } from "react-router-dom";

const LogoImage = () => {
  return (
    <Link to="/">
      <FigureImage
        className={styles.logoImage}
        attributes={{
          src: "https://www.svgrepo.com/show/230797/question.svg",
          width: 50,
          height: "auto",
          alt: "Company logo image.",
        }}
      />
    </Link>
  );
};

export default LogoImage;
