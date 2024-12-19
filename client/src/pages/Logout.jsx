import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

//logout functionality
export const Logout = () => {
  //destructuring logOutUser method from useAuth Consumer
  const { logOutUser } = useAuth();

  useEffect(() => {
    logOutUser();
  }, [logOutUser]);

  return <Navigate to="/login"></Navigate>;
};
