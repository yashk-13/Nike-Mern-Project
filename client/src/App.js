import React, { useEffect, } from "react";
import { motion, useAnimation } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mainbar from "./components/Mainbar";
import Textcarousal from "./components/Textcarousal";
import Footer from "./components/Footer";
import "jquery";

import OnscrollCarousel from "./components/onscrollCarousel";

// import images 
// import KickDiv from "./images/kicks.jpg";
import Arrivals from "./images/arrivals.webp";

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.js"></script>;

function App() {
  // const [message, setMessage] = useState("");

  // const shoes = [
  //   {
  //     name: "Shoe 1",
  //     description: "Description 1",
  //     image: "images/jordanairshoes.webp",
  //   },
  //   {
  //     name: "Shoe 2",
  //     description: "Description 2",
  //     image: "images/nikedunks.webp",
  //   },
  //   {
  //     name:'Nike Spark Women 2',
  //     description:'abc',
  //     image:'https://static.nike.com/a/images/t_default/f5fd2eb8-359e-4469-9415-78f921e9cf82/spark-womens-shoes-MLJBSb.png'
  //   },
  //   {
  //     name:'Metcon Shoes',
  //     description:'abc',
  //     image:'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/265c0427-d117-4a13-a5cc-180e4370a2a2/nike-just-do-it.jpg'
  //   } ,
  //   // Add more shoe objects as needed
  // ];
  


  useEffect(() => {
    fetch("http://localhost:8080");
    // .then((res) => res.text()
    // .then((res) => setMessage(res));
  }, []);

  const introAnimation = {   //  Animation that comes from left side Intro 
    hidden: {
      opacity: 0,
      x: -70,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const outroAnimation = {    //  Animation that comes from left side outro 
    hidden: {
      opacity: 0,
      x: 70,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
      },
    },
  };
  const rightIntroAnimation = {  //  Animation that comes from right side Intro 
    hidden: {
      opacity: 0,
      x: 70,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
      },
    },
  };
  const rightOutroAnimation = {     //  Animation that comes from right side outro 
    hidden: {
      opacity: 0,
      x: -70,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const controls = useAnimation();      // controls for left Animation
 const rightControls = useAnimation();  // controls for right Animation
  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementsByClassName("DISRUPT")[0]; // Replace 'dareToDisrupt' with the actual ID of your "Dare to Disrupt" element.

      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top + rect.height >= 0 && rect.top - window.innerHeight <= 0;

        if (isVisible) {
          controls.start('visible');
          rightControls.start('visible');
        } else {
          controls.start('hidden');
          rightControls.start('hidden');
        }
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [controls ,rightControls]);

  return (
    <>
      <Mainbar />

      <br />
      <Textcarousal />

      <div className="kickdiv">
        {/* <img
          src={KickDiv}
          style={{ backgroundBlendMode: "lighten" }}
          className=" rounded mx-auto d-block img-fluid kicks"
          alt=""
        />  */}
        <OnscrollCarousel/>
      </div>
      <div className="dare">
        <motion.p initial="hidden"
          animate={rightControls}
          variants={rightIntroAnimation}
          exit={rightOutroAnimation}
          className="right-side-para">Nike Air Force 1</motion.p>
        <motion.h1
          id="dareToDisrupt"
          initial="hidden"
          animate={controls}
          variants={introAnimation}
          exit={outroAnimation}
          className="bold-text mx-auto d-block text-fluid DISRUPT"
        >
          DARE TO DISRUPT
        </motion.h1>
        <motion.p initial="hidden"
          animate={rightControls}
          variants={rightIntroAnimation}
          exit={rightOutroAnimation}
          className="right-side-para">
          Step up and stand out in the ground-breaking style of urban legend.
        </motion.p>
      </div>
      <div>
        <img
          src={Arrivals}
          className="arrivals rounded mx-auto d-block img-fluid kicks"
          alt=""
        />
      </div>
      
      <Footer className="footer" />
      
    </>
  );
}

export default App;
