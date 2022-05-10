import ReactDOM from "react-dom/client";
import "./index.css";
import BlinkPage from "../src/components/Pages/BlinkPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetailViewPage from "./components/Pages/BookDetailViewPage";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import Login from "./components/atoms/Auth0/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/explore" element={<BlinkPage />} />
      <Route path="/home" element={<App />} />
      <Route
        path="/"
        element={
          <Auth0Provider
            domain="dev-t7uorqjf.us.auth0.com"
            clientId="z9RHu4Q5iMvflXI76MJ52KgbgWnLjNwG"
            redirectUri="http://localhost:3000/home"
          >
            <div style={{ paddingLeft: "700px", paddingTop: "350px" }}>
              <Login />
            </div>
          </Auth0Provider>
        }
      />
      <Route path="/bookdetail" element={<BookDetailViewPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
