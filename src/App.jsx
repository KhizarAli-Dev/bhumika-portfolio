import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { LenisProvider } from "./lib/LenisContext";

function App() {
  return (
    <LenisProvider>
      <div className="w-full min-h-screen overflow-x-clip bg-bg">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </LenisProvider>
  );
}

export default App;
