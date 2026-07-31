import React from "react";
import { motion } from "framer-motion";

import { getImageUrl } from "../../utils";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const links = [
  { icon: "contact/emailIcon.png", alt: "Email icon", href: "mailto:myemail@email.com", label: "myemail@email.com" },
  { icon: "contact/linkedinIcon.png", alt: "LinkedIn icon", href: "https://www.linkedin.com/myname", label: "linkedin.com/myname" },
  { icon: "contact/githubIcon.png", alt: "Github icon", href: "https://www.github.com/myname", label: "github.com/myname" },
];

export const Contact = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 flex w-full flex-col flex-wrap items-center justify-between gap-6 bg-secondary px-[6%] py-8 text-center text-text sm:mt-[100px] sm:flex-row sm:px-[10%] sm:py-10 sm:text-left"
    >
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-h2 font-bold tracking-[2px]">Contact</h2>
        <p className="mt-1 text-body tracking-[0.5px] text-text-muted">
          Feel free to reach out!
        </p>
      </div>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center gap-4 list-none sm:items-start"
      >
        {links.map((link) => (
          <motion.li
            key={link.href}
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="flex items-center justify-center gap-4 sm:justify-start"
          >
            <img src={getImageUrl(link.icon)} alt={link.alt} className="w-6" />
            <a
              href={link.href}
              className="border-b border-transparent text-body font-normal tracking-[0.5px] text-text no-underline transition-colors duration-200 hover:border-primary-light hover:text-primary-light"
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.footer>
  );
};
