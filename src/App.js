import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Reviews from "./Pages/Reviews";
import Navbar from "./Shared/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appoint" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
