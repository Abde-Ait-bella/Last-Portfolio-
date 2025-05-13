import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "./utils/Icon";

function MyStack() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
    // }
  }, []);

  return (
    <div className="flex sm:flex-row flex-col h-full ms:justify-evenly justify-center gap-12  ms:gap-2 items-center">
      {/* Stick man with a reveal animation */}


      {loading ? (
      // {/* Jumping Dots Animation */}
        <motion.div
          className="flex justify-center items-center gap-2.5 mb-4"
          animate="jump"
          variants={{
            jump: {
              transition: {
                staggerChildren: -0.2,
                staggerDirection: -1
              }
            }
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-5 h-5 rounded-full bg-slate-400"
              variants={{
                jump: {
                  y: -30,
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }
                }
              }}
            />
          ))}
        </motion.div>
      )
        :
        (
          <motion.div
            className="relative w-[400px] sm:w-[700px] aspect-video order-first sm:order-last"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <Icon type="MySQL" top="top-[55%]" left="left-[13%]" delay={0.1} />
            <Icon type="PHP" top="top-[15%]" left="left-[10%]" delay={1} />
            <Icon type="SASS" top="top-[32%]" left="left-[23%]" delay={1.2} />
            <Icon type="GitHub" top="top-[37%]" left="left-[44%]" delay={1.3} />
            <Icon type="ReactJs" top="top-[12%]" left="left-[33%]" delay={1.5} />
            <Icon type="Postman" top="top-[55%]" left="left-[32%]" delay={2} />
            <Icon
              type="TailwindCss"
              top="top-[33%]"
              left="left-[63%]"
              delay={2.6}
            />
            <Icon type="Laravel" top="top-[10%]" left="left-[55%]" delay={2.8} />
            <Icon type="PostgreSql" top="top-[60%]" left="left-[54%]" delay={3} />
            <Icon type="Bootstrap" top="top-[58%]" left="left-[70%]" delay={3.2} />
            <Icon
              type="Framer_Motion"
              top="top-[13%]"
              left="left-[76%]"
              delay={3.4}
            />
            <Icon type="Jira" top="top-[39%]" left="left-[80%]" delay={3.6} />
          </motion.div>
        )
      }
    </div>
  );
}

export default MyStack;
