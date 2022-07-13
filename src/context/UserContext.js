import { useState, useContext, createContext } from "react";

const Context = createContext();

export const useUserContext = () => {
  return useContext(Context);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  console.log("USER", user)

  const store = {
    user,
    setUser
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};