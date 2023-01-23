import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ExpandCard from "./ExpandCard";

function Contact() {
  const handleFacebookClick = () => {
    window.open("https://www.google.com", "_blank"); 
    console.log("FB BUTTON PRESSED");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.google.com", "_blank"); 
    console.log("Youtube button pressed");
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
        <ExpandCard
          icon={faEnvelope}
          classProp={"email-icon"}
          text={"heloworld@gmail.com"}
        />
        <ExpandCard
          icon={faPhone}
          classProp={"phone-icon"}
          text={"+923244994454"}
        />
        <FontAwesomeIcon
          className="youtube-icon"
          icon={faYoutube}
          onClick={handleYoutubeClick}
        />
      </div>
    </motion.div>
  );
}

export default Contact;
