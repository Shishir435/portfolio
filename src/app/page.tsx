import About from "@/components/portfolio/about";
import Contact from "@/components/portfolio/contact";
import Experience from "@/components/portfolio/experience";
import Hero from "@/components/portfolio/hero";
import Navbar from "@/components/portfolio/navbar";

import Tech from "@/components/portfolio/tech";
import dynamic from "next/dynamic";
const PinnedRepo = dynamic(()=>import("../components/portfolio/pinned-repo"),{ssr: false});

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
