import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const handleFacebookClick = () => {
    window.open("https://www.google.com", "_blank"); 
    console.log("FB BUTTON PRESSED");
  };

  const handleEmailClick = () => {
    console.log("Email button pressed");
  };

  const handlePhoneClick = () => {
    console.log("Phone button pressed");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>To Contact us, you can use any of the following links :o</h3>
      <div className="contactus-items">
        <FontAwesomeIcon
          className="facebook-icon"
          icon={faFacebook}
          onClick={handleFacebookClick}
        />
        <FontAwesomeIcon
          className="email-icon"
          icon={faEnvelope}
          onClick={handleEmailClick}
        />
        <FontAwesomeIcon
          className="phone-icon"
          icon={faPhone}
          onClick={handlePhoneClick}
        />
      </div>
    </motion.div>
  );
}

export default Contact;
