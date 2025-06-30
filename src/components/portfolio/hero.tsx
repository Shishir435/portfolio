import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { buttonVariants } from "../ui/button";
import OllamaClientBadge from "./ollama-client-badge";

const Hero = () => {
  return (
    <section id="hero">
      <div className="overflow-hidden">
        <div className="bubble-top"></div>
        <div className="bubble"></div>
      </div>
      <div className="mx-auto size-[200px] rounded-full bg-gradient-to-r from-[#fae5fa] to-[#dae6f9]">
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
      <div className="mt-6 text-center">
        <h1 className="text-5xl sm:text-7xl">Shishir Chaurasiya</h1>
      </div>
      <div className="mt-8 flex items-center justify-center gap-10">
        <OllamaClientBadge/>
        <Link
          href="https://github.com/Shishir435"
          title="See My Github"
          className={`${buttonVariants({
            variant: "secondary",
          })} flex gap-4 p-4`}
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
      <div className="mt-8 text-center">
        <p>
          Crafting <span className="text-gradient">Aesthetic</span> Interfaces
          and <span className="text-gradient">Seamless</span> Full-stack
          applications
        </p>
      </div>

      <div className="mb-3 mt-10 text-center md:mt-14">
        <Link
          href="#contact"
          className={`${buttonVariants({
            variant: "link",
          })} !rounded-full bg-blue-600 px-[80px] py-6 text-lg text-white no-underline hover:no-underline`}
        >
          Let&apos;s Talk <ArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
