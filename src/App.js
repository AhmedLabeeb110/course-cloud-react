import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import "../src/App.css";

import NavBar from "./Components/Common/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
