import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ExpandCard.css";

function ExpandCard({icon, classProp, text}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 1, type:"spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card"
    >
      <motion.h2 layout="position">
      <FontAwesomeIcon
          className={classProp}
          icon={icon}
      />
      </motion.h2>
      {isOpen && (
        <motion.div className="expand">
          <p>{text}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ExpandCard;
