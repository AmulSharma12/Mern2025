import { createContext, useContext, useState } from "react";

//creating AuthContext from createContext
const AuthContext = createContext();

//creating Auth Provider - it will wrap overall App component so it will be available across all the pages
export const AuthProvider = ({ children }) => {
  //creating state for managing token
  const [token, setToken] = useState(localStorage.getItem("token"));

  //for storing token in localstorage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //for checking whether the user is logged in or not
  let isUserLoggedIn = !!token;
  console.log("isUserLoggedIn ", isUserLoggedIn);

  //logOutUser functionality
  const logOutUser = () => {
    setToken(""); //making the token state to empty
    return localStorage.removeItem("token"); //removing token from the local storage
  };

  //mounting children
  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, isUserLoggedIn, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//creating Auth Consumer
export const useAuth = () => {
  const authProviderValue = useContext(AuthContext);
  console.log("authProviderValue ", authProviderValue);
  if (authProviderValue == null) {
    throw new Error("Mount AuthProvider outside the App.jsx");
  }

  return authProviderValue;
};
