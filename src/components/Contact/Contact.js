import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon = {faCircleXmark}className="btnClose" onClick={handleCloseModal}></FontAwesomeIcon>
        <FontAwesomeIcon icon ={faCircleChevronRight} className="btnNext" onClick={nextSlide}></FontAwesomeIcon>
        <FontAwesomeIcon icon ={faCircleChevronLeft} className="btnPrev" onClick={prevSlide}></FontAwesomeIcon>
        <div className="fullScreenImage" onClick={handleCloseModal}>
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
