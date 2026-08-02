import React from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "923096310251"; // no + or leading 0, country code included
const DEFAULT_MESSAGE =
  "Hi Bhumika, I'm interested in your digital marketing services. Could we discuss my project?";
export const WhatsAppButton = () => {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE,
  )}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-soft sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        <path d="M16.004 0C7.164 0 0 7.163 0 16c0 2.822.738 5.554 2.14 7.966L0 32l8.24-2.104A15.93 15.93 0 0 0 16.004 32C24.84 32 32 24.837 32 16S24.84 0 16.004 0Zm0 29.25a13.2 13.2 0 0 1-6.735-1.85l-.483-.287-4.89 1.248 1.31-4.767-.314-.49A13.19 13.19 0 0 1 2.75 16c0-7.31 5.945-13.25 13.254-13.25S29.258 8.69 29.258 16 23.313 29.25 16.004 29.25Zm7.27-9.933c-.398-.199-2.356-1.163-2.722-1.296-.365-.133-.63-.199-.895.199-.265.397-1.028 1.296-1.26 1.562-.232.265-.464.298-.862.1-.398-.199-1.68-.62-3.2-1.977-1.183-1.055-1.982-2.358-2.214-2.755-.232-.398-.025-.612.174-.81.179-.178.398-.464.596-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.16-1.227-2.958-.323-.777-.652-.672-.895-.685l-.762-.014c-.265 0-.696.1-1.06.497-.365.398-1.392 1.36-1.392 3.319 0 1.958 1.425 3.85 1.624 4.116.199.265 2.803 4.28 6.79 6.003.949.41 1.689.655 2.266.838.952.303 1.818.26 2.503.158.764-.114 2.356-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.265-.763-.464Z" />
      </svg>
    </motion.a>
  );
};
