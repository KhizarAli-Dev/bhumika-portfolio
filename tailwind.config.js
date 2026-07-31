/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        "text-muted": "rgba(255, 255, 255, 0.7)",
        primary: "#576cbc",
        "primary-light": "#7c8fd6",
        secondary: "#19376d",
        dark: "#0b2447",
        bg: "#04152d",
      },
      fontFamily: {
        outfit: ["Outfit", "Arial", "Helvetica", "sans-serif"],
        roboto: ["Roboto", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        small: "clamp(0.85rem, 0.8rem + 0.25vw, 1rem)",
        body: "clamp(0.95rem, 0.88rem + 0.35vw, 1.125rem)",
        h3: "clamp(1.15rem, 1.05rem + 0.5vw, 1.4rem)",
        h2: "clamp(1.6rem, 1.35rem + 1.2vw, 2.2rem)",
        btn: "clamp(0.95rem, 0.9rem + 0.3vw, 1.15rem)",
        "hero-title": "clamp(2.2rem, 1.6rem + 3vw, 4.2rem)",
        "hero-desc": "clamp(1rem, 0.9rem + 0.6vw, 1.4rem)",
      },
      borderRadius: {
        md2: "12px",
        lg2: "20px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
