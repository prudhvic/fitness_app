import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ExerciseContextProvider from "./context/ExerciseContext";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-otx3ckk6.us.auth0.com"
        clientId="caXBbDdcldVoErKjGw8x0BXwuaZOaKj9"
        redirectUri={window.location.origin}
      >
        <ExerciseContextProvider>
          <App />
        </ExerciseContextProvider>
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);
