import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Education from "@/components/education/Education";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
