import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import LoginModal from "./Components/Common/LoginModal";

import "../src/App.css";

import NavBar from "./Components/Common/NavBar";

function App() {
  return (
    <div className="App">
      <LoginModal />
      <NavBar />
    </div>
  );
}

export default App;
