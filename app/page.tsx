import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

