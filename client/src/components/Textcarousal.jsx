import React from "react";
import { motion } from "framer-motion";
function Textcarousal() {
  const TextBar = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.0 } },
  };

  return (
    <motion.div
      id="carouselExampleSlidesOnly"
      initial="hidden"
      animate="visible"
      variants={TextBar}
      className="carousel slide bg-body-tertiary"
      data-bs-ride="carousel"
    >
      <motion.div className="carousel-inner">
        <motion.div className="carousel-item active" data-bs-interval="10000" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <h3>New Styles on sale Upto 40% Off</h3>
          <p>Shop Now.</p>
        </motion.div>
        <motion.div className="carousel-item" data-bs-interval="2000" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <h3>Free Delivery.</h3>
          <p>Applies to order on 14000 and above.</p>
        </motion.div>
        <motion.div className="carousel-item" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <h3>Hello Nike App</h3>
          <p>Download the App to access everything Nike.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Textcarousal;
