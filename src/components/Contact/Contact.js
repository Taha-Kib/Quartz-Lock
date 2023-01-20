import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import images from "../../images";
function Contact() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index)=>{
    setSlideNumber(index);
    setOpenModal(true);
  }


  const handleCloseModal = () =>{
    setOpenModal(false);
  }


  const nextSlide = () =>{
    slideNumber === images.length-1 ? setSlideNumber(0) : setSlideNumber (slideNumber+1)
  }

  const prevSlide = () =>{
    slideNumber === 0 ? setSlideNumber(images.length-1) : setSlideNumber (slideNumber-1)
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    {openModal && 
      <div className="sliderWrap">
        <button className="btnClose" onClick={handleCloseModal}>X</button>
        <button className="btnNext" onClick={nextSlide}>Next</button>
        <button className="btnPrev" onClick={prevSlide}>Previous</button>
        <div className="fullScreenImage">
          <img src={images[slideNumber]} alt="" />
        </div>
      </div>
    }


      <div className="galleryWrap">
        {images.map((image, index) => {
          return (
            <div className="single" key={index} onClick= {()=> handleOpenModal(index)}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
      ContactUs
    </motion.div>
  );
}

export default Contact;
