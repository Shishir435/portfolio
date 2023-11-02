import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="mt-25">
      <div className="my-8  max-w-6xl mx-auto flex items-center justify-between gap-10 rounded-3xl p-3 md:p-6 bg-gradient-to-r from-[#c0d8f2] to-[#ddeafa] ">
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
          <div className=" mt-8 mb-3 flex justify-between">
            <div>
              <Link
                href="#contact"
                className={`${buttonVariants({
                  variant: "link",
                })} bg-blue-600 px-16 py-6 !rounded-full text-white no-underline hover:no-underline`}
              >
                Let&apos;s Work Togather
              </Link>
            </div>
            <div>
                <Link href="https://www.upwork.com/freelancers/~019752a06cf3f11b51">
                    <Image src="/upwork.svg" width={40} height={40} alt="github"></Image>
                </Link>
            </div>
            <div>
                <Link href="https://github.com/Shishir435">
                    <Image src="/github.svg" width={40} height={40} alt="github"></Image>
                </Link>
            </div>
            <div>
                <Link href="https://linkedin.com/in/shishir-chaurasiya">
                    <Image src="/linkedin.svg" width={40} height={40} alt="github"></Image>
                </Link>
            </div>
            <div>
                <Link href="https://www.instagram.com/_shishir435/">
                    <Image src="/instagram.svg" width={40} height={40} alt="github"></Image>
                </Link>
            </div>
           
          </div>
        </div>
        <div className="hidden md:block w-2/5 ">
          <Image
            src="/panda.jpeg"
            width={200}
            height={200}
            alt="work"
            className="mx-auto rounded-xl"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default About;
