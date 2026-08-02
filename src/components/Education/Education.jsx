import React from "react";
import { motion } from "framer-motion";

import education from "../../data/education.json";
import certifications from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-[6%] mt-12 text-text sm:mx-[10%] sm:mt-20"
      id="education"
    >
      <h2 className="text-h2 font-bold uppercase tracking-[1.75px] text-text">
        Education
      </h2>

      <div className="mt-6 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
        <img
          src={getImageUrl("education/education.png")}
          alt="Bhumika's education"
          className=" w-40 sm:w-52 md:w-[35%] rounded-lg2 object-cover  shadow-soft"
        />

        <div className="flex w-full flex-col gap-6 md:w-[65%]">
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex w-full flex-col gap-4"
          >
            {education.map((item, id) => {
              return (
                <motion.li
                  key={id}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="flex flex-col items-start gap-3 rounded-md2 bg-gradient-to-r from-secondary from-0% to-secondary/0 to-100% p-5 transition-shadow duration-200 hover:shadow-soft sm:flex-row sm:items-center sm:gap-4"
                >
                  {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/80">
                    <img
                      src={getImageUrl(item.imageSrc)}
                      alt={item.degree}
                      className="w-6"
                    />
                  </div> */}
                  <div className="font-roboto">
                    <h3 className="text-h3 font-medium">{item.degree}</h3>
                    <p className="text-small font-light text-text-muted">
                      {item.institution}
                    </p>
                    <p className="text-small font-light text-text-muted">
                      {item.startDate ? `${item.startDate} - ` : ""}
                      {item.endDate}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="mb-3 text-h3 font-semibold">Certifications</h3>
            <ul className="flex flex-wrap gap-3">
              {certifications.map((cert, id) => (
                <li
                  key={id}
                  className="rounded-full bg-dark px-4 py-2 text-small font-normal text-text-muted"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};