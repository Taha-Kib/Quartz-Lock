import React from "react";
import { motion } from "framer-motion";
import images from "../../images";
import Gallery from "../Gallery/Gallery";
import "./Products.css";


function EpoxyGrouts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="epoxy-grout-header">XDDD</h1>
      <Gallery images={images}></Gallery>
    </motion.div>
  );
}

export default EpoxyGrouts;
