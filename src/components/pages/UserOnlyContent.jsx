import UserContext from "../../store/UserContext";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

const UserOnlyContent = () => {
  const { userLoggedin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    !userLoggedin &&
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
  }, [userLoggedin]);

  return (
    <>
      {userLoggedin ? (
        <Outlet />
      ) : (
        <p>You are not authorized to view this content. Redirecting to home page.</p>
      )}
    </>
  );
};

export default UserOnlyContent;
