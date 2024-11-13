import Image from "next/image";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
