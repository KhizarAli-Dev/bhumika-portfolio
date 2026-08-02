import React from "react";
import { motion } from "framer-motion";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-[6%] mt-12 text-text sm:mx-[10%] sm:mt-20"
      id="experience"
    >
      <h2 className="text-h2 font-bold uppercase tracking-[1.75px] text-text">
        Experience
      </h2>

      {/* Responsive Center Image */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center mt-6 md:hidden"
      >
        <img
          src={getImageUrl("history/work.png")}
          alt="Bhumika at work"
          className="w-40 sm:w-52 md:w-64 rounded-lg2 object-cover shadow-soft"
        />
      </motion.div>

      <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:justify-evenly md:items-start">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex w-full flex-row flex-wrap content-start justify-center gap-8 md:w-[45%] md:justify-start"
        >
          {skills.map((skill, id) => {
            return (
              <motion.div
                key={id}
                variants={itemVariants}
                className="group flex flex-col items-center gap-2.5"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary transition-colors duration-200 hover:bg-primary sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px]"
                >
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className="w-[55%]"
                  />
                </motion.div>
                <p className="font-roboto text-small font-medium">
                  {skill.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.ul
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex w-full flex-col gap-4 md:w-[50%]"
        >
          {history.map((historyItem, id) => {
            return (
              <motion.li
                key={id}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                className="flex flex-col items-start gap-3 rounded-md2 bg-gradient-to-r from-secondary from-0% to-secondary/0 to-100% p-5 transition-shadow duration-200 hover:shadow-soft sm:flex-row sm:items-center sm:gap-4"
              >
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className="w-11 shrink-0"
                /> */}
                <div className="font-roboto">
                  <h3 className="text-h3 font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p className="text-small font-light text-text-muted">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul className="ml-2 mt-1.5 list-inside list-disc text-body">
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.section>
  );
};
