import React from "react";
import { motion } from "framer-motion";
import './Home.css';
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Home
      <ImageSlider/>

      {/* <iframe width="560" height="500" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allowFullScreen></iframe> */}
    </motion.div>
  );
}

export default Home;
