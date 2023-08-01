import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import NikeLogo from "../images/nikelogo.png";

function Sidebar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
  }; // Use the navigate function to navigate to the specified path
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <motion.Button  whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }} style={{border:'none'}} onClick={handleShow}>
        <img className="logo" src={NikeLogo} alt="Nike" />
      </motion.Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="inside-logo">
            <div class="userTitle"></div>
            <img
              className="logo "
              src={NikeLogo}
              alt="nikelogo"
              onClick={() => handleLinkClick("/")}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="d-flex" role="search">
            <button className="btn " type="submit">
              <img
                width="32"
                height="32"
                className="search-icon"
                src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/32/external-search-user-interface-inkubators-basic-outline-inkubators.png"
                alt="external-search-user-interface-inkubators-basic-outline-inkubators"
              />
            </button>
            <input
              className="form-control me-2 rounded-pill search-bar "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <br />
          <div className="sidediv">
            <ul>
              <h2>Filters</h2>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
