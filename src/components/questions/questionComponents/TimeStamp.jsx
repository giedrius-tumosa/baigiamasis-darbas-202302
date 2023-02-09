const TimeStamp = ({ postTimeStamp, editTimeStamp }) => {
  return (
    <>
      <div className="questionTimeStamp">
        <span>{editTimeStamp ? `Edited on ${editTimeStamp}` : `Posted on ${postTimeStamp}`}</span>
      </div>
    </>
  );
};
// Ar reikia is viso isEdited json faile?
export default TimeStamp;
