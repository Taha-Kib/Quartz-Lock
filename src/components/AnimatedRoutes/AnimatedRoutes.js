import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import { AnimatePresence } from "framer-motion";
import Contact from "../Contact/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
