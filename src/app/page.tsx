import About from "@/components/portfolio/about";
import Contact from "@/components/portfolio/contact";
import Experience from "@/components/portfolio/experience";
import Hero from "@/components/portfolio/hero";
import Navbar from "@/components/portfolio/navbar";
import PinnedRepo from "@/components/portfolio/pinned-repo";
import Tech from "@/components/portfolio/tech";

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Experience />
      <PinnedRepo />
      <Contact />
    </div>
  );
}
