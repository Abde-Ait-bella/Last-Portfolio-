"use client";
import { motion as m } from "framer-motion";
import React from "react";

function Reveal({ children, delay = 0.5, bgColor = "bg-gray-200" }) { // recieve the effect color and delay from the props

  return (
    <div>
      {/* the div that warp the effect*/}
      <div className="relative overflow-hidden w-fit">
        {/* the div that comes from bottom(y:-99%) to top(y:102%) and disapear because of the overflow hidden  */}
        <m.div
          initial={{ y: "100%" }}
          className={`w-[100%] h-full absolute z-10 origin-top ${bgColor}`}
          whileInView={{ y: ["100%", "0%", "-102%"] }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay, duration: 0.5, ease: "easeInOut" }}
        ></m.div>

        {/* the div that holds the element (text | image ...) that comes from the children props, it comes from bottom(y:100%) and stay on the warp div (y:0) */}
        <m.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay, duration: 0.5, ease: "easeInOut" }}
          className="flex justify-center"
        >
          {children}
        </m.div>
      </div>
    </div>
  );
}

export default Reveal;
