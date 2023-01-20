import React from "react";
import { motion } from "framer-motion";

function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div>
        Our products Include EPOXY GROUTS XDD
      {/* <iframe width="560" height="500" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allowFullScreen></iframe> */}

        </div>
    </motion.div>
  );
}

export default Products;
