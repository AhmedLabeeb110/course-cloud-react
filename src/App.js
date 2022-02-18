import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "../src/App.css";

import NavBar from "./Components/Common/NavBar";
import HeroSection from "./Components/Landing-Page/HeroSection";
import BecomeInstructor from "./Components/Landing-Page/BecomeInstructor";
import ExploreCourses from "./Components/Landing-Page/ExploreCourses";
import Deals from "./Components/Landing-Page/Deals";
import FeaturedInstructors from "./Components/Landing-Page/FeaturedInstructors";
import StudentComments from "./Components/Landing-Page/StudentComments";
import RecentBlogs from "./Components/Landing-Page/RecentBlogs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <BecomeInstructor />
      <ExploreCourses />
      <Deals countdownTimestampMs={1659983662000}/>
      <FeaturedInstructors/>
      <StudentComments/>
      <RecentBlogs/>
    </div>
  );
}

export default App;
