/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Feature() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-14">
        <h1 className="text-7xl font-neueMontrealregular tracking-tight">
          Featured projects
        </h1>
      </div>
      
      <div className="px-20">
      <div className="flex justify-between pr-[31.5vw]">
        <h1 className="mt-10 flex  items-center text-xl font-neueMontrealregular">
            <div className="w-4 h-4 mr-2  flex-shrink-0 rounded-full  bg-white">
            </div>
            Cardboard Spaceship
        </h1>
        <h1 className="mt-10 flex  items-center text-xl font-neueMontrealregular">
            <div className="w-4 h-4 mr-2  flex-shrink-0 rounded-full  bg-white">
            </div>
            AH2 & Matt Horn
        </h1>
        </div>
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tighter leading-none font-neueMontrealregular font-bold text-8xl">
              {"CARDBOARD SPACESHIP".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  className="inline-block"
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative  w-1/2 h-[75vh] "
          >
            
            <div className="card w-full h-full rounded-xl overflow-hidden">
              
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tighter font-neueMontrealregular font-bold leading-none text-8xl">
                {"AH2 & MATT HORN".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    className="inline-block"
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.02,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
