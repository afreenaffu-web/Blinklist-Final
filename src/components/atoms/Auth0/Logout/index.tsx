import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      style={{
        backgroundColor: "white",
        border: "none",
        height: "30px",
        width: "100px",
        boxShadow: "2px 2px 2px 2px grey",
      }}
      onClick={() => logout({ returnTo: "http://localhost:3000" })}
    >
      <b>Log Out</b>
    </button>
  );
};

export default Logout;
