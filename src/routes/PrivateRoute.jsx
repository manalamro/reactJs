import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authActions } from "../store/actions";
import { useAppSelector } from "../store";

const PrivateRoute = function ({ children }) {
  const accessToken = authActions.getAccessToken();
  const { user } = useAppSelector((state) => state.auth);

  const location = useLocation();

  if (!user.usersRoleId) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
export default PrivateRoute;
