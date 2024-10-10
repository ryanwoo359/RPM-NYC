import React, { lazy, Suspense } from "react";
import "./global.css";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/nav/Navbar.jsx";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Support from "./pages/Support.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
