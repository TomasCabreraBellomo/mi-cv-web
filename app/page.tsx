import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-900">
      <Navbar />

      <Hero />

      <About />

      <Education />

      <Skills />

      <Projects />

      <Achievements />

      <Contact />

      <Footer />
    </main>
  );
}