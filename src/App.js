import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Reviews from "./Pages/Reviews";
import UpdateProfile from "./Pages/UpdateProfile";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import RequireAuth from "./Pages/RequireAuth";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appoint"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/update" element={<UpdateProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
