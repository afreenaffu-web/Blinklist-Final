import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <button
      style={{ backgroundColor: "darkred", color: "white" }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      <b>Log Out</b>
    </button>
  );
};

export default Logout;
