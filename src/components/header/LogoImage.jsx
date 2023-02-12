import FigureImage from "../global/FigureImage";
import styles from "./logoImage.module.scss";

const LogoImage = () => {
  return (
    <FigureImage
      className={styles.logoImage}
      attributes={{
        src: "https://www.svgrepo.com/show/230797/question.svg",
        width: 50,
        height: "auto",
        alt: "Company logo image.",
      }}
    />
  );
};

export default LogoImage;
