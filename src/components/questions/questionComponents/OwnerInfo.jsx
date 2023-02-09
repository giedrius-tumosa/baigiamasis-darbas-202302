import { useContext, useEffect, useState } from "react";
import UserContext from "../../../store/UserContext";
import FigureImage from "../../global/FigureImage";

const OwnerInfo = ({ ownerId }) => {
  const { users, loadingUsers } = useContext(UserContext);
  const [questionOwner, setQuestionOwner] = useState(null);

  useEffect(() => {
    const loadUser = async (ownerId) => {
      const user = await users.find((user) => user.id === ownerId);
      setQuestionOwner(user);
    };
    loadUser(ownerId);
  }, [loadingUsers]);

  return (
    <>
      {questionOwner && (
        <div
          className="questionOwnerInfo"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <FigureImage
            className="profileImgSmall"
            attributes={{ width: 40, height: 40, src: questionOwner.userProfileImgUrl }}
          />
          <span>{`Asked by ${questionOwner.userName}`}</span>
        </div>
      )}
      {!questionOwner && (
        <div className="questionOwnerInfo">
          <span>{`loading...`}</span>
        </div>
      )}
    </>
  );
};

export default OwnerInfo;
