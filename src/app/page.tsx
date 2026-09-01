import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <>
        <Navbar />
        <main>
          <Hero />
          <WhatWeDo />
           <Projects />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </>
    </div>
  );
}
