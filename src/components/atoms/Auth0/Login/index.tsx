import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      style={{ height: "30px", width: "60px" }}
      onClick={() => loginWithRedirect()}
    >
      <b>Log In</b>
    </button>
  );
};

export default Login;
