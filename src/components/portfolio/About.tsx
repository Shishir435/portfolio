import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { AboutLinks } from "@/lib/content"
import { cn } from "@/lib/utils"

const About = () => {
  return (
    <section id="about" className="mx-3 mt-24">
      <div className="mx-auto  my-8 max-w-6xl  rounded-3xl bg-gradient-to-r from-[#c0d8f2] to-[#ddeafa] p-3 md:p-6 ">
        <div className=" flex items-center justify-between gap-10">
          <div className="w-full px-6 md:w-10/12 md:px-10 ">
            <h2 className="my-4 text-4xl font-bold">About Me</h2>
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
          <div className="hidden w-2/5 md:block ">
            <Image
              src="/webp/shishir.webp"
              title="Shishir's Image"
              width={200}
              height={200}
              alt="work"
              className="mx-auto rounded-xl"
              style={{ height: "auto" }}
            ></Image>
          </div>
        </div>
        <div className=" ms:gap-0 mb-3 mt-8 flex flex-wrap items-center justify-center gap-5 px-6 sm:justify-between md:px-10">
          <div className="">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "text-base !rounded-full bg-blue-600 py-6 text-white no-underline hover:no-underline sm:px-[60px] md:px-[70px]"
              )}
            >
              Let&apos;s Work Together
            </Link>
          </div>
          <div className="flex gap-3 md:-translate-x-6">
            {AboutLinks.map(({ name, imgUrl, url }) => (
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
  )
}

export default About
