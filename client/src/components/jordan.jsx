import React from "react";
import { useNavigate } from "react-router-dom";
// import SignIn from "./signin";
import Jordanimg from "../images/jordan.png";

function Jordan() {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const handleLinkClick = (path) => {
    navigate(path);
  };
  var StyleJordan = {
    padding: "0px 35px",
    "text-decoration": "none",
    cursor: "pointer",
    display: "flex",
    "justify-content": "space-between",
    "align-item": "centre",
    background: "inherit",
    backgroundColor: "#eeeeee",
  };
  var storeLinks = {
    textDecoration: "none",
    color: "black",
    background: "inherit",
    padding: "2px 5px",
    fontSize: "13px",
  };
  return (
    <div className="jordan" style={StyleJordan}>
      <img
        src={Jordanimg}
        alt="jordan"
        style={{ background: "inherit", height: "30px" }}
      />
      <ul style={{ backgroundColor: "#eeeeee" }}>
        <li style={{ listStyle: "none", background: "none" }}>
          <a href="/login" style={storeLinks}>
            Find a Store
          </a>
          <a
            href="/Signin"
            onClick={() => handleLinkClick("/login")}
            style={storeLinks}
          >
            Sign In
          </a>
          <a href="/login" style={storeLinks}>
            Help
          </a>
          <a href="/login" style={storeLinks}>
            Join Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Jordan;
