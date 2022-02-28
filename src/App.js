import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css";
import bootstrap from "bootstrap";

import Home from "../src/Components/Landing-Page/Home";
import Cart from "../src/Components/Cart/Cart";

import NavBar from "../src/Components/Common/NavBar";
import Footer from "../src/Components/Common/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
