import styles from "./timeStamp.module.scss";

const TimeStamp = ({ postTimeStamp, editTimeStamp }) => {
  return (
    <>
      <div className={styles.postTimeStamp}>
        <span>{`${editTimeStamp && `Edited on ${editTimeStamp} |`}`}</span>
        <span>{`Posted on ${postTimeStamp}`}</span>
      </div>
    </>
  );
};
export default TimeStamp;
