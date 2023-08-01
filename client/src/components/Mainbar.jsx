import React from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";
import Sidebar from "./sidebar";
import Jordan from "./jordan";

function Mainbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const handleLinkClick = (path) => {
    navigate(path);
  }; // Use the navigate function to navigate to the specified path
  const mainbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.9} },
  };

  const imgVariants = {
    initial: { opacity: 0.8, scale: 1 },
    hover: { opacity: 1, scale: 1.4 ,x:-10},
  };
  return (
    <>
      <Jordan />

      <motion.div
        className={`navbar ${isMobile ? "mobile" : ""}`}
        initial="hidden"
        animate="visible"
        variants={mainbarVariants}
      >
        <motion.div className="left-item">
          <Sidebar />
        </motion.div>
        <motion.div className="middle-item">
          {/* Use onClick event to handle navigation */}
          <p onClick={() => handleLinkClick("/Men")}>Men</p>
          <p onClick={() => handleLinkClick("/Women")}>Women</p>
          <p onClick={() => handleLinkClick("/Kids")}>Kids</p>
        </motion.div>

        <motion.div className="right-item">
          <motion.img
            width="24"
            height="24"
            src="https://img.icons8.com/windows/32/filled-heart.png"
            alt="filled-heart"
            variants={imgVariants}
            initial="initial"
            whileHover="hover" // This will trigger the 'hover' variant when hovering over the image
            style={{ cursor: 'pointer' }}/>  
         
          <motion.img
            width="24"
            height="24"
            src="https://img.icons8.com/pastel-glyph/64/paper-bag--v2.png"
            alt="paper-bag--v2"
            variants={imgVariants}
            initial="initial"
            whileHover="hover" // This will trigger the 'hover' variant when hovering over the image
            style={{ cursor: 'pointer' }} // Add the pointer cursor to indicate that the image is clickable
         
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Mainbar;
