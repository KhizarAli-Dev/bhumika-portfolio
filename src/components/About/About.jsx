import React from "react";
import { motion } from "framer-motion";

import { getImageUrl } from "../../utils";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const aboutData = [
  {
    icon: "about/digital-marketing.png",
    alt: "dm icon",
    title: "Digital Marketing",
    text: "Managing end-to-end social media campaigns, from strategy to execution, for 15+ clients",
  },
  {
    icon: "about/writer.png",
    alt: "cc icon",
    title: "Content & Creative",
    text: "Designing scroll-stopping creatives and trend-aware content using Canva & CapCut",
  },
  {
    icon: "about/seo.png",
    alt: "seo icon",
    title: "SEO & Analytics",
    text: "Optimizing brand visibility with SEO, Google Ads, and SEMrush-driven insights",
  },
];

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-[1] mx-[6%] mt-12 rounded-lg2 bg-[#0c0c0c]/60 p-6 sm:mx-[10%] sm:mt-[110px] sm:p-8 md:p-[55px]"
      id="about"
    >
      <h2 className="text-h2 font-bold uppercase tracking-[1.75px] text-text">
        About Me
      </h2>
      <div className="mt-6 flex flex-col items-center gap-5 md:flex-row md:gap-10">
        <img
          src={getImageUrl("about.png")}
          alt="Me sitting with a laptop"
          className=" w-[35%] rounded-md2 "
        />
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex w-full flex-col gap-6 text-text"
        >
          {aboutData.map((item) => (
            <motion.li
              key={item.title}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 rounded-md2 bg-gradient-to-r from-[rgba(165,215,232,0.42)] from-0% to-transparent to-100% bg-[length:0%_100%] bg-no-repeat p-4 transition-[background-size] duration-300 hover:bg-[length:100%_100%] sm:gap-5 sm:p-5"
            >
              <img src={getImageUrl(item.icon)} alt={item.alt} className="w-8 shrink-0 sm:w-10" />
              <div>
                <h3 className="mb-1 text-h3 font-semibold">{item.title}</h3>
                <p className="text-body leading-snug text-text-muted">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};
