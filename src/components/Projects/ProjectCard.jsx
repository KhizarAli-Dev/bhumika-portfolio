import React from "react";
import { motion } from "framer-motion";

import { getImageUrl } from "../../utils";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: "0 22px 30px rgba(4,21,45,0.55)" }}
      transition={{ duration: 0.3 }}
      className="flex h-full flex-col rounded-md2 bg-gradient-to-b from-primary from-0% to-[#132a53] to-100% p-5 px-6 shadow-[0_16px_14px_0_#04152d]"
    >
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="mb-5 aspect-[16/10] w-full rounded-lg object-cover"
      />
      <h3 className="text-h3 font-bold">{title}</h3>
      <p className="mt-2 flex-grow text-body leading-snug text-text-muted">
        {description}
      </p>
      <ul className="mt-3.5 flex w-full flex-row flex-wrap gap-2 list-none">
        {skills.map((skill, id) => {
          return (
            <li
              key={id}
              className="rounded-full bg-dark px-4 py-1 text-small font-normal"
            >
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="mt-5 flex w-full justify-around gap-2.5">
        <motion.a
          href={demo}
          whileHover={{ y: -2 }}
          className="rounded-full bg-primary px-5 py-1.5 text-btn font-semibold text-text no-underline transition-colors duration-200 hover:bg-primary-light"
        >
          Demo
        </motion.a>
        <motion.a
          href={source}
          whileHover={{ y: -2 }}
          className="rounded-full bg-primary px-5 py-1.5 text-btn font-semibold text-text no-underline transition-colors duration-200 hover:bg-primary-light"
        >
          Source
        </motion.a>
      </div>
    </motion.div>
  );
};
