import React from "react";
import { motion } from "framer-motion";

import { getImageUrl } from "../../utils";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero = () => {
  return (
    <section className="relative z-[1] mx-[6%] mt-6 flex min-h-[70vh] flex-col-reverse items-center justify-between gap-5 text-center sm:mx-[10%] sm:mt-10 md:min-h-0 md:flex-row md:gap-8 md:text-left">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="z-[1] flex max-w-[560px] flex-col items-center text-text md:items-start"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3.5xl md:text-4xl mb-6 bg-gradient-to-r from-white from-70% to-white/0 to-120% bg-clip-text font-roboto text-hero-title font-black leading-[1.1] text-transparent"
        >
          Hi, I'm Bhumika Kavita
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mb-7 font-roboto text-hero-desc leading-relaxed text-text-muted"
        >
          Digital Marketing Specialist | SEO & Paid Ads | Helping brands grow
          online
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="mailto:myemail@email.com"
          whileHover={{ y: -3, boxShadow: "0 10px 24px rgba(87,108,188,0.45)" }}
          whileTap={{ y: -1 }}
          className="inline-block rounded-full bg-primary px-8 py-3.5 text-btn font-semibold text-text no-underline shadow-[0_0_4px_0_rgba(0,0,0,0.25)] transition-colors duration-200 hover:bg-primary-light"
        >
          Let's Connect
        </motion.a>
      </motion.div>
      <motion.img
        src={getImageUrl("hero/hero main.png")}
        alt="Hero image of me"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 12, 0],
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="z-[1] w-3/4 max-w-[420px] sm:w-3/5 md:w-[45%] rounded-full"
      />
      <div className="absolute -left-[10vw] -top-32 z-0 h-[50vw] max-h-[600px] min-w-[250px] max-w-[600px] w-[50vw] rounded-full bg-secondary/70 blur-[100px]" />
      <div className="absolute -right-[25vw] top-[246px] z-0 h-[50vw] max-h-[600px] min-w-[250px] max-w-[700px] w-[70vw] rounded-full bg-secondary/70 blur-[100px]" />
    </section>
  );
};
