import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ImageSlider.css";
import images from "../../images";

function ImageSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(()=>{
    //get entire width of carousel and subtract current offset width
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])

  return (
    <div>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width}}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item">
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ImageSlider;
