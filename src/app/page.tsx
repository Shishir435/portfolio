import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import PinnedRepo from "@/components/PinnedRepo"
import Tech from "@/components/Tech"

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <PinnedRepo />
      <Contact />
    </div>
  )
}
