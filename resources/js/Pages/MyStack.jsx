import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "./utils/Icon";

function MyStack() {
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Délai de chargement

    // Gestion du redimensionnement pour la responsivité
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Déterminer la taille et les positions des icônes en fonction de la taille de l'écran
  const getIconPositions = () => {
    // Mobile (< 640px)
    if (windowWidth < 640) {
      return {
        containerClass: "w-[300px] h-[400px]",
        icons: [
          { type: "MySQL", top: "top-[60%]", left: "left-[10%]", delay: 0.1 },
          { type: "PHP", top: "top-[20%]", left: "left-[10%]", delay: 0.5 },
          { type: "SASS", top: "top-[40%]", left: "left-[20%]", delay: 0.8 },
          { type: "GitHub", top: "top-[50%]", left: "left-[40%]", delay: 1.0 },
          { type: "ReactJs", top: "top-[15%]", left: "left-[33%]", delay: 1.2 },
          { type: "Postman", top: "top-[65%]", left: "left-[49%]", delay: 1.4 },
          { type: "TailwindCss", top: "top-[35%]", left: "left-[53%]", delay: 1.6 },
          { type: "Laravel", top: "top-[10%]", left: "left-[55%]", delay: 1.8 },
          { type: "PostgreSql", top: "top-[74%]", left: "left-[30%]", delay: 2.0 },
          { type: "Bootstrap", top: "top-[70%]", left: "left-[75%]", delay: 2.2 },
          { type: "Framer_Motion", top: "top-[25%]", left: "left-[80%]", delay: 2.4 },
          { type: "Jira", top: "top-[45%]", left: "left-[80%]", delay: 2.6 }
        ]
      };
    }
    // Tablette (640px - 1024px)
    else if (windowWidth < 1024) {
      return {
        containerClass: "w-[500px] h-[450px]",
        icons: [
          { type: "MySQL", top: "top-[60%]", left: "left-[14%]", delay: 0.1 },
          { type: "PHP", top: "top-[18%]", left: "left-[12%]", delay: 0.6 },
          { type: "SASS", top: "top-[35%]", left: "left-[24%]", delay: 0.9 },
          { type: "GitHub", top: "top-[42%]", left: "left-[44%]", delay: 1.1 },
          { type: "ReactJs", top: "top-[13%]", left: "left-[36%]", delay: 1.3 },
          { type: "Postman", top: "top-[58%]", left: "left-[36%]", delay: 1.6 },
          { type: "TailwindCss", top: "top-[34%]", left: "left-[64%]", delay: 1.9 },
          { type: "Laravel", top: "top-[12%]", left: "left-[60%]", delay: 2.2 },
          { type: "PostgreSql", top: "top-[65%]", left: "left-[58%]", delay: 2.5 },
          { type: "Bootstrap", top: "top-[62%]", left: "left-[75%]", delay: 2.8 },
          { type: "Framer_Motion", top: "top-[15%]", left: "left-[80%]", delay: 3.1 },
          { type: "Jira", top: "top-[42%]", left: "left-[82%]", delay: 3.3 }
        ]
      };
    }
    // Desktop (≥ 1024px)
    else {
      return {
        containerClass: "w-[700px] aspect-video",
        icons: [
          { type: "MySQL", top: "top-[55%]", left: "left-[13%]", delay: 0.1 },
          { type: "PHP", top: "top-[15%]", left: "left-[10%]", delay: 1.0 },
          { type: "SASS", top: "top-[32%]", left: "left-[23%]", delay: 1.2 },
          { type: "GitHub", top: "top-[37%]", left: "left-[44%]", delay: 1.3 },
          { type: "ReactJs", top: "top-[12%]", left: "left-[33%]", delay: 1.5 },
          { type: "Postman", top: "top-[55%]", left: "left-[32%]", delay: 2.0 },
          { type: "TailwindCss", top: "top-[33%]", left: "left-[63%]", delay: 2.6 },
          { type: "Laravel", top: "top-[10%]", left: "left-[55%]", delay: 2.8 },
          { type: "PostgreSql", top: "top-[60%]", left: "left-[54%]", delay: 3.0 },
          { type: "Bootstrap", top: "top-[58%]", left: "left-[70%]", delay: 3.2 },
          { type: "Framer_Motion", top: "top-[13%]", left: "left-[76%]", delay: 3.4 },
          { type: "Jira", top: "top-[39%]", left: "left-[80%]", delay: 3.6 }
        ]
      };
    }
  };

  const { containerClass, icons } = getIconPositions();

  return (
    <div className="flex sm:flex-row flex-col h-full w-full justify-center sm:justify-evenly items-center gap-8 sm:gap-4 py-4">
      {loading ? (
        // Animation de chargement avec points sautants
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
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-400"
              variants={{
                jump: {
                  y: [-15, 0, -15],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
              }}
            />
          ))}
        </motion.div>
      ) : (
        // Conteneur d'icônes avec positionnement responsive
        <motion.div
          className={`relative ${containerClass} order-first sm:order-last`}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {icons.map((icon, index) => (
            <Icon
              key={index}
              type={icon.type}
              top={icon.top}
              left={icon.left}
              delay={icon.delay}
              // Réduire la taille des icônes sur mobile
              scale={windowWidth < 640 ? 0.8 : windowWidth < 1024 ? 0.9 : 1}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default MyStack;
