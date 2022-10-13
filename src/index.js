import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ExerciseContextProvider from "./context/ExerciseContext";
import AuthContextProvider from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <ExerciseContextProvider>
          <App />
        </ExerciseContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
