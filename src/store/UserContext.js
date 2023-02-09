import { createContext, useState } from "react";
import { getData, postData } from "../fetchApiFunctions";

const ENDPOINT_USERS = "http://localhost:5000/users";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // States
  const [users, setUsers] = useState([]);
  const [userLoggedin, setUserLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: "_RNFGVNnp8rDjtprPf8rX",
    userName: "Jonas",
    userProfileImgUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    userEmail: "jonas@gmail.com",
    userPassword: "labas2020",
  });
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
      setUsers([...users]); //TODO: check if works
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