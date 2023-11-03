import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { AboutLinks } from "@/lib/content";

const About = () => {
  return (
    <section id="about" className="mt-25 mx-3">
      <div className="my-8  max-w-6xl mx-auto  rounded-3xl p-3 md:p-6 bg-gradient-to-r from-[#c0d8f2] to-[#ddeafa] ">
        <div className=" flex items-center justify-between gap-10">
          <div className="w-full md:w-10/12 px-6 md:px-10 ">
            <h2 className="font-bold text-4xl my-4">About Me</h2>
            <p className="my-6">
              Hello, I&apos;m <span className="text-gradient">Shishir</span>,
              and my passion lies in being a dedicated full-stack web developer.
              With a commitment to delivering top-notch web solutions.
            </p>
            <p className="my-6">
              I specialize in both frontend and backend development. Let&apos;s
              collaborate to create outstanding digital experiences together.
            </p>
          </div>
          <div className="hidden md:block w-2/5 ">
            <Image
              src="/shishir.jpeg"
              title="Shishir's Image"
              width={200}
              height={200}
              alt="work"
              className="mx-auto rounded-xl"
              style={{ height: "auto" }}
            ></Image>
          </div>
        </div>
        <div className=" mt-8 mb-3 flex flex-wrap gap-5 ms:gap-0 justify-center sm:justify-between items-center px-6 md:px-10">
          <div className="">
            <Link
              href="#contact"
              className={`${buttonVariants({
                variant: "link",
              })} bg-blue-600 sm:px-[60px] md:px-[70px] py-6 !rounded-full text-white text-md no-underline hover:no-underline`}
            >
              Let&apos;s Work Togather
            </Link>
          </div>
          <div className="flex gap-3 md:-translate-x-6">
            {AboutLinks.map(({name,imgUrl,url})=>(
              <div key={name}>
              <Link href={url} target="_blank">
                <Image
                  src={imgUrl}
                  width={40}
                  height={40}
                  alt={`${name} link"`}
                  title={`See my ${name} profile`}
                  style={{ height: "auto" }}
                ></Image>
              </Link>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
