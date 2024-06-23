import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="mb-5"></div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
