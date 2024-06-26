import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll dta-scroll-section data-scroll-speed='.2' className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[24vw] leading-none font-founder  uppercase pt-8 pr-10  -mb-[5.5vw] pb-0"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[24vw] leading-none font-founder  uppercase pt-8 pr-10  -mb-[5.5vw] pb-0"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[24vw] leading-none font-founder  uppercase pt-8  -mb-[5.5vw] pb-0"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
