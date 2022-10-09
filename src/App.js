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
import Dashboard from "./Pages/Dasboard/Dashboard";
import WelcomeDash from "./Pages/Dasboard/WelcomeDash";
import MyAppointment from "./Pages/MyAppointment";
import Users from "./components/Users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RequireAdmin from "./Pages/RequireAdmin";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<WelcomeDash />} />
            <Route path="/dashboard/myProfile" element={<UpdateProfile />} />
            <Route
              path="/dashboard/myAppointment"
              element={<MyAppointment />}
            />
            <Route
              path="/dashboard/users"
              element={
                <RequireAdmin>
                  <Users />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/update" element={<UpdateProfile />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
