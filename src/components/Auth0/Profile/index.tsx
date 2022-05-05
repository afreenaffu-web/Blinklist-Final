import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import App from "../../../App";
const Profile = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <App /> : <></>;
};

export default Profile;
