"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { MobileNavLinks } from "@/lib/content";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function closeMenu(linkName: string) {
    console.log(linkName);
    setIsMenuOpen(false);
  }
  return (
    <>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      >
        <Menu />
      </div>
      {isMenuOpen && (
        <div className="w-32 fixed top-[80px] right-[80px] bg-slate-300 rounded-md p-4 z-40">
          <div className="flex flex-col text-center w-full">
            {MobileNavLinks.map(
              ({ linkName, linkTo }: { linkName: string; linkTo: string }) => (
                <div onClick={() => closeMenu(linkName)} key={linkName}>
                  <Link
                    href={linkTo}
                    className={`${buttonVariants({
                      variant: "ghost",
                    })} capitalize w-full text-black `}
                  >
                    {linkName}
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;

// <div onClick={closeMenu}>
//                 <Link
//                   href="#about"
//                   className={buttonVariants({ variant: "ghost" })}
//                 >
//                   About
//                 </Link>
//               </div>
//               <div onClick={closeMenu}>
//                 <Link
//                   href="#tech"
//                   className={buttonVariants({ variant: "ghost" })}
//                 >
//                   Tech
//                 </Link>
//               </div>
//               <div onClick={closeMenu}>
//                 <Link
//                   href="/blog"
//                   className={buttonVariants({ variant: "ghost" })}
//                 >
//                   Blog
//                 </Link>
//               </div>
//               <div onClick={closeMenu}>
//                 <Link
//                   href="#contact"
//                   className={`${buttonVariants({
//                     variant: "ghost",
//                   })} `}
//                 >
//                   Contact Me
//                 </Link>
//               </div>
