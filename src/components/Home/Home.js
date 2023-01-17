import React from "react";
import { motion } from "framer-motion";
import Logo from '../../Assets/Logo.png';
import './Home.css';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <img src={Logo} className = "chemical-logo" alt="app__logo" /> */}
      Home
    </motion.div>
  );
}

export default Home;
