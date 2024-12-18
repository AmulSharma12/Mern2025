import { createContext, useContext } from "react";

//creating AuthContext from createContext
export const AuthContext = createContext();

//creating Auth Provider - it will wrap overall App component so it will be available across all the pages
export const AuthProvider = ({ children }) => {
  //for storing token in localstorage
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  //mounting children
  return (
    <AuthContext.Provider value={{ storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

//creating Auth Consumer
export const useAuth = () => {
  const authProviderValue = useContext(AuthContext);
  if (authProviderValue == null) {
    throw new Error("Mount AuthProvider outside the App.jsx");
  }

  return authProviderValue;
};
