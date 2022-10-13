import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import ExercisePage from "./pages/Exercises";
import SignUP from "./pages/SignUp";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<ExercisePage />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
        <Route path="/auth/signin" element={<SignUP />} />
      </Routes>
    </div>
  );
}

export default App;
