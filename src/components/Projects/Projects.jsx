import React from "react";
import { motion } from "framer-motion";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-[6%] mt-12 text-text sm:mx-[10%] sm:mt-20"
      id="projects"
    >
      <h2 className="text-h2 font-bold uppercase tracking-[1.75px] text-text">
        Projects
      </h2>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-8 grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6"
      >
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </motion.div>
    </motion.section>
  );
};
