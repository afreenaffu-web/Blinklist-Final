import Login from "./components/Auth0/Login";
import Logout from "./components/Auth0/Logout";
import Profile from "./components/Auth0/Profile";

export const AuthApp = () => {
  return (
    <>
      <div style={{ marginLeft: "700px", marginTop: "5px" }}>
        <Login />
        <Logout />
      </div>

      <Profile />
    </>
  );
};
