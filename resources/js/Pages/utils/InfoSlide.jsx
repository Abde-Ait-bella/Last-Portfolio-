import React, { useState } from "react";
import { motion as m } from "framer-motion";

function InfoSlide() {
  const [open, setOpen] = useState(false);

  return (
    <m.div
      className={`fixed hidden w-screen h-[6%] top-0 left-0 bg-gray-100 md:flex items-center hover:cursor-helpe  ${
        !open ? "justify-end" : "justify-center "
      }`}
      initial={{ x: "-100%" }}
      // first appear animation
      animate={{
        x: "-97%",
        transition: { delay: open ? 0 : 2, duration: 0.5, ease: "easeInOut" },
      }}
      // hover animatio
      whileHover={{
        x: "0",
        backgroundColor: "#596988",
        transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
      }}
      onMouseOver={() => setOpen(true)} // set open to true while hover
      onMouseOut={() => setOpen(false)} // set open to false when exit the hover
    >
      {!open ? (
        // initially show the arrows svg [justify-end]
        <m.div
          // animation to keep the arrow moving
          className="me-2"
          animate={{ x: "20%" }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatDelay: 0,
            repeatType: "reverse",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
          >
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </m.div>
      ) : (
        // on Hover show site info sentence [justify-center]
        <p className="font-primary text-gray-300 whitespace-nowrap ">
          I built this website with{" "}
          <span className="text-gray-50 font-medium">Next.js 13</span> , it's
          styled with{" "}
          <span className="text-gray-50 font-medium">TailwindCss</span>, and
          animated with{" "}
          <span className="text-gray-50 font-medium">Framer Motion</span>, I
          used <span className="text-gray-50 font-medium">AWS SES </span>
          to handle the contact form and it's deployed on{" "}
          <span className="text-gray-50 font-medium"> Digital Ocean</span>
        </p>
      )}
    </m.div>
  );
}

export default InfoSlide;
