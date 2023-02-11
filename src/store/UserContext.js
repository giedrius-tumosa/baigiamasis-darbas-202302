import { createContext, useEffect, useState } from "react";
import { getData, postData } from "../fetchApiFunctions";

const ENDPOINT_USERS = "http://localhost:5000/users";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // States
  const [users, setUsers] = useState([]);
  const [userLoggedin, setUserLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userFetchErrors, setUserFetchErrors] = useState({
    getErr: "",
    postErr: ""
  });
  const [loadingUsers, setLoadingUsers] = useState(false);

  // Error library

  const errorLib = {
    getErr: "Error: could not retreive user data from server.",
    postErr: "Error: could not post new user data to server."
  };

  // Functions


  const getUsers = async () => {
    try {
      setLoadingUsers(true);
      const userData = await getData(ENDPOINT_USERS, errorLib.getErr);
      setUsers(userData);
      setUserFetchErrors({ ...userFetchErrors, getErr: "" });
    } catch (error) {
      setUserFetchErrors({ ...userFetchErrors, getErr: error.message });
    } finally {
      setLoadingUsers(false);
    }
  };

  const postUser = async (newUser) => {
    try {
      setUsers([...users, newUser]);
      await postData(ENDPOINT_USERS, newUser, errorLib.postErr);
      setUserFetchErrors({ ...userFetchErrors, postErr: "" });
    } catch (error) {
      setUserFetchErrors({ ...userFetchErrors, postErr: error.message });
      setUsers([...users]);
    }
  };

  return (
    <UserContext.Provider value={{
      userLoggedin, setUserLoggedin,
      currentUser, setCurrentUser,
      userFetchErrors, setUserFetchErrors,
      loadingUsers, setLoadingUsers,
      users, getUsers, postUser,
    }}>
      {children}
    </UserContext.Provider>
  );

};

export { UserProvider };
export default UserContext;