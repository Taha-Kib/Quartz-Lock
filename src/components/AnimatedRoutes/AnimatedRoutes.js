import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import { AnimatePresence } from "framer-motion";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import EpoxyGrouts from "../Products/EpoxyGrouts";
import Signin from "../Signin/Signin";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/EpoxyGrouts" element={<EpoxyGrouts />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
