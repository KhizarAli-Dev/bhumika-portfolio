import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { getImageUrl } from "../../utils";
import { useLenis } from "../../lib/LenisContext";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, { offset: -70, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
    history.pushState(null, "", href);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-10 flex items-center justify-between px-[6%] py-4 border-b border-white/[0.06] bg-bg/55 backdrop-blur-md sm:px-[10%] sm:py-5"
    >
      <a
        className="text-h3 font-semibold text-text no-underline transition-colors duration-200 hover:text-primary-light"
        href="/"
      >
        Portfolio
      </a>
      <div className="relative flex">
        <motion.img
          whileTap={{ scale: 0.9 }}
          className="hidden w-[26px] h-[26px] cursor-pointer max-[830px]:block"
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Desktop menu */}
        <ul className="hidden gap-10 list-none min-[831px]:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-body text-text no-underline pb-1 transition-colors duration-200 hover:text-primary-light after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[45px] right-0 z-[3] flex flex-col items-end gap-4 rounded-md2 bg-[#0b2447]/95 backdrop-blur-md px-8 py-6 shadow-soft list-none min-[831px]:hidden"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative text-body text-text no-underline pb-1 transition-colors duration-200 hover:text-primary-light after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
