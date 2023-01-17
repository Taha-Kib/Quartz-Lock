import React from 'react'
import { motion } from "framer-motion";
import './Contact.css';


function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        ContactUs
    </motion.div>
  )
}

export default Contact