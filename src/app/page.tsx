import About from "@/components/portfolio/About"
import Contact from "@/components/portfolio/Contact"
import Experience from "@/components/portfolio/Experience"
import Hero from "@/components/portfolio/Hero"
import Navbar from "@/components/portfolio/Navbar"
import PinnedRepo from "@/components/portfolio/PinnedRepo"
import Tech from "@/components/portfolio/Tech"

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
  )
}
