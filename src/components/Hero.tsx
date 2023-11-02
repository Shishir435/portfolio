import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="overflow-hidden">
        <div className="bubble-top"></div>
        <div className="bubble"></div>
      </div>
      <div className="h-[200px] w-[200px] mx-auto bg-gradient-to-r from-[#fae5fa]  to-[#dae6f9] rounded-full overflow-hidden flex justify-center items-center">
        <Image
          src="/panda.jpeg"
          className="rounded-full "
          height={200}
          width={200}
          alt="avatar"
        ></Image>
      </div>
      <div className="text-center mt-6">
        <h1 className="font-custom text-5xl sm:text-7xl">Shishir Chaurasiya</h1>
      </div>
      <div className="flex justify-center mt-8 gap-10 items-center">
        <Link href="https://github.com/Shishir435" 
        className={`${buttonVariants({variant: "secondary"})} py-4  flex gap-4 px-4 `}
        >
            <Image src="/next.svg" width={40} height={40} alt="nextjs image"></Image>
            Developer
        </Link>
        <Link href="https://github.com/Shishir435"
        className={`${buttonVariants({variant: "secondary"})}  py-4 flex gap-4 px-4 `}
        >
            <Image src="/github.svg" width={30} height={30} alt="nextjs image"></Image>
            Github
        </Link>
      </div>
      <div className="text-center mt-8">
        <p>Crafting <span className="text-gradient">Aesthetic</span> Interfaces and <span className="text-gradient">Seamless</span> Full-stack applications</p>
      </div>

      <div className="text-center mt-10 mb-3 md:mt-14 ">
        <Link href="#contact" className={`${buttonVariants({
            variant: "link"
        })} bg-blue-600 px-16 py-6 !rounded-full text-white no-underline hover:no-underline`}>
            Let&apos;s Talk <ArrowRight className="ml-2"/> 
        </Link>
      </div>
    </section>
  );
};

export default Hero;
