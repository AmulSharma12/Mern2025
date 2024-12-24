import { createContext, useContext, useEffect, useState } from "react";

//creating AuthContext from createContext
const AuthContext = createContext();

//creating Auth Provider - it will wrap overall App component so it will be available across all the pages
export const AuthProvider = ({ children }) => {
  //creating state for managing token
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState("");

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

  //--------- for fetching userData functionality available across all the application
  const getUserData = async () => {
    try {
      if (!token) return;
      const response = await fetch(" http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUserData(data.userData);
      }
    } catch (error) {
      console.log(
        `Error fetching the userData in getUserData method: ${error}`
      );
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  //mounting children
  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, isUserLoggedIn, logOutUser, userData }}
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
