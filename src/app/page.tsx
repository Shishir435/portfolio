import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Tech from '@/components/Tech'
import Work from '@/components/Work'


export default function Home() {
  return (
    <div className=''>
    <Navbar/>
    <Hero/>
    <About/>
    <Tech/>
    <Work/>
    <Contact/>
    </div>
  )
}
