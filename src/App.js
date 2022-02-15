import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "../src/App.css";

import NavBar from "./Components/Common/NavBar";
import HeroSection from "./Components/Landing-Page/HeroSection";
import BecomeInstructor from "./Components/Landing-Page/BecomeInstructor";
import ExploreCourses from "./Components/Landing-Page/ExploreCourses";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <BecomeInstructor />
      <ExploreCourses />
    </div>
  );
}

export default App;
