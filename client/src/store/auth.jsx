import { createContext, useContext, useEffect, useState } from "react";

//creating AuthContext from createContext
const AuthContext = createContext();

//creating Auth Provider - it will wrap overall App component so it will be available across all the pages
export const AuthProvider = ({ children }) => {
  //creating state for managing token
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState("");
  const [services, setServices] = useState([]);
  const [isLoadingState, setIsLoadingState] = useState(true);
  const authorizationToken = `Bearer ${token}`;

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
      setIsLoadingState(true);
      const response = await fetch(" http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUserData(data.userData);
        setIsLoadingState(false);
      }
    } catch (error) {
      console.log(
        `Error fetching the userData in getUserData method: ${error}`
      );
    }
  };

  //getServices for fetching the services from the DB
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const servicesData = await response.json();
        console.log(`Services fetched succesfully: ${servicesData}`);
        setServices(servicesData);
      }
    } catch (error) {
      console.log(
        `Error fetching the services in getServices method: ${error}`
      );
    }
  };

  useEffect(() => {
    getServices();
    getUserData();
  }, []);

  //mounting children
  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        isUserLoggedIn,
        logOutUser,
        userData,
        services,
        authorizationToken,
        isLoadingState,
      }}
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
