import { useContext, useEffect, useState } from "react";
import UserContext from "../../../store/UserContext";
import FigureImage from "../../global/FigureImage";

const PostOwnerInfo = ({ ownerId }) => {
  const { users, loadingUsers } = useContext(UserContext);
  const [postOwner, setPostOwner] = useState(null);

  useEffect(() => {
    const loadUser = async (ownerId) => {
      const user = await users.find((user) => user.id === ownerId);
      setPostOwner(user);
    };
    loadUser(ownerId);
  }, [loadingUsers]);

  return (
    <>
      {postOwner && (
        <div
          className="postOwnerInfo"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <FigureImage
            className="profileImgSmall"
            attributes={{ width: 40, height: 40, src: postOwner.userProfileImgUrl }}
          />
          <span>{`By ${postOwner.userName}`}</span>
        </div>
      )}
      {!postOwner && (
        <div className="postOwnerInfo">
          <span>{`loading...`}</span>
        </div>
      )}
    </>
  );
};

export default PostOwnerInfo;
