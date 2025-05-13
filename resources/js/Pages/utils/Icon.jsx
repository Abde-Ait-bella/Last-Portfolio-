// "use client"; 
import React, { useState } from "react"; 
import { motion } from 'framer-motion'
// Import various tech icons from local image files
import Framer_Motion from "../assets/images/techsIcons/framer.png";
import CSS from "../assets/images/techsIcons/css.png";
import GitHub from "../assets/images/techsIcons/github.png";
import Laravel from "../assets/images/techsIcons/laravel.png";
import MySQL from "../assets/images/techsIcons/mysql.png";
import ReactJs from "../assets/images/techsIcons/reactjs.png";
import TailwindCss from "../assets/images/techsIcons/tailwind.png";
import Postman from "../assets/images/techsIcons/postman.png";
import PHP from "../assets/images/techsIcons/php.png";
import SASS from "../assets/images/techsIcons/sass.png";
import PostgreSql from "../assets/images/techsIcons/sql.png";
import Jira from "../assets/images/techsIcons/jira.png";
import Bootstrap from "../assets/images/techsIcons/bootstrap.png";

// Import the "Reveal" effect component
import Reveal from "./Reveal";

// Object of tech icons with their corresponding image files (CSS means CSS:CSS)
const imageMap = {
  Framer_Motion,
  CSS,
  GitHub,
  Laravel,
  MySQL,
  ReactJs,
  TailwindCss,
  Postman,
  PHP,
  SASS,
  PostgreSql,
  Jira,
  Bootstrap,
};


function Icon(props) {

  // Define a state variable "info" to track whether the icon is being hovered
  const [info, setInfo] = useState(false);

  // Determine the selected image based on the "type" prop or default to "Framer_Motion"
  const selectedImage = imageMap[props.type] || Framer_Motion; 

  return (
    <motion.div
      className={`z-20 w-[10%] aspect-square  hover:cursor-grab absolute ${props.top} ${props.left}`}
      drag
      dragMomentum={false}
      dragSnapToOrigin={true}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { delay: info ? 0 : props.delay } }}
      whileHover={{ scale: 1.3, transition: { delay: 0 } }}
      viewport={{ once: true }}
      onHoverStart={(event, info) => {
        setInfo(true); // Set "info" to true when the icon is hovered
      }}
      onHoverEnd={(event, info) => {
        setInfo(false); // Set "info" to false when the hover ends
      }}
      animate={{
        y: "5%",
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0,
          ease: "easeInOut",
          duration: "0.8",
          delay: props.delay,
        },
      }}
    >
      <div className="flex flex-col justify-center items-center">
        {/* Display the selected image */}
        <img
          src={selectedImage}
          width={110}
          height={110}
          style={{ pointerEvents: "none" }}
          alt="techs icons"
        />
        {/* Display tech info when hovered */}
        {info ? (
          <Reveal delay={0} bgColor="bg-slate-200">
            <p className="font-primary text-center text-sm text-slate-600 w-full whitespace-nowrap ">
              {/* Display tech name (conver Framer_Motion to Framer Motion ) */}
              {props.type !== "Framer_Motion" ? props.type : "Framer Motion"}
            </p>
          </Reveal>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Icon;
