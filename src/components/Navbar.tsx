"use Client"

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="flex justify-between items-center px-5 md:px-15 lg:px-20 py-8 h-[125px] relative w-full overflow-hidden">
        <div className="font-custom font-bold text-2xl ">
          <Link href="/">
            <p className="text-gradient ">
              Shishir <span className="hidden sm:inline-block">Chaurasiya</span>
            </p>
          </Link>
        </div>
        {/* cicles */}
        <div
          className="hidden md:block w-[100px] h-[100px] rounded-full bg-[#f9f8ff] fixed -z-10 top-[-45px] left-[300px]"
          aria-hidden="true"
        ></div>
        <div
          className="hidden md:block w-[250px] h-[250px] rounded-full bg-[#f9f8ff] fixed top-[-125px] -z-10   right-[-125px]"
          aria-hidden="true"
        ></div>
        {/* Desktop navigation */}
        <div className="hidden md:block">
          <div className="flex items-center">
            <div>
              <Link href="#work">
                <a className={`${buttonVariants({ variant: "ghost" })}`}>Work</a>
              </Link>
            </div>
            <div>
              <Link href="#about">
                <a className={buttonVariants({ variant: "ghost" })}>About</a>
              </Link>
            </div>
            <div>
              <Link href="#tech">
                <a className={buttonVariants({ variant: "ghost" })}>Tech</a>
              </Link>
            </div>
            <div>
              <Link href="/blog">
                <a className={buttonVariants({ variant: "ghost" })}>Blog</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div>
            <Link href="#contact">
              <a
                className={`${buttonVariants({
                  variant: "outline",
                })} !rounded-2xl border-2 px-7`}
              >
                Contact Me
              </a>
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className="md:hidden"
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <Menu />
        </div>
        {isMenuOpen ? (
          <div className="fixed top-[80px] right-[80px] bg-slate-400 rounded-md p-4 z-40">
            <div className="flex flex-col text-center">
              <div onClick={closeMenu}>
                <Link href="#work">
                  <a className={`${buttonVariants({ variant: "ghost" })}`}>Work</a>
                </Link>
              </div>
              <div onClick={closeMenu}>
                <Link href="#about">
                  <a className={buttonVariants({ variant: "ghost" })}>About</a>
                </Link>
              </div>
              <div onClick={closeMenu}>
                <Link href="#tech">
                  <a className={buttonVariants({ variant: "ghost" })}>Tech</a>
                </Link>
              </div>
              <div onClick={closeMenu}>
                <Link href="/blog">
                  <a className={buttonVariants({ variant: "ghost" })}>Blog</a>
                </Link>
              </div>
              <div onClick={closeMenu}>
                <Link href="#contact">
                  <a
                    className={`${buttonVariants({
                      variant: "ghost",
                    })} `}
                  >
                    Contact Me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
