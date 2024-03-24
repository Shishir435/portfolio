import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const Hero = () => {
  return (
    <section id="hero">
      <div className="overflow-hidden">
        <div className="bubble-top"></div>
        <div className="bubble"></div>
      </div>
      <div className="h-[200px] w-[200px] mx-auto rounded-full bg-gradient-to-r from-[#fae5fa]  to-[#dae6f9]">
        <Image
          src="/panda300circ.png"
          className=""
          // style={{height: 200, width: 200}}
          height={300}
          width={300}
          alt="avatar"
          priority={true}
        ></Image>
      </div>
      <div className="text-center mt-6">
        <h1 className="font-custom text-5xl sm:text-7xl">Shishir Chaurasiya</h1>
      </div>
      <div className="flex justify-center mt-8 gap-10 items-center">
        <Link
          href="https://github.com/Shishir435"
          title="Nextjs Developer"
          className={`${buttonVariants({
            variant: "secondary",
          })} py-4  flex gap-4 px-4 `}
        >
          <Image
            src="/nextjs30.png"
            width={30}
            height={30}
            alt="nextjs image"
            style={{ height: "auto" }}
          ></Image>
          Developer
        </Link>
        <Link
          href="https://github.com/Shishir435"
          title="See My Github"
          className={`${buttonVariants({
            variant: "secondary",
          })}  py-4 flex gap-4 px-4 `}
        >
          <Image
            src="/github30.png"
            width={30}
            height={30}
            alt="github image"
            style={{ height: "auto" }}
          ></Image>
          Github
        </Link>
      </div>
      <div className="text-center mt-8">
        <p>
          Crafting <span className="text-gradient">Aesthetic</span> Interfaces
          and <span className="text-gradient">Seamless</span> Full-stack
          applications
        </p>
      </div>

      <div className="text-center mt-10 mb-3 md:mt-14 ">
        <Link
          href="#contact"
          className={`${buttonVariants({
            variant: "link",
          })} bg-blue-600 px-[80px] py-6 !rounded-full text-white text-lg no-underline hover:no-underline`}
        >
          Let&apos;s Talk <ArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  )
}

export default Hero
