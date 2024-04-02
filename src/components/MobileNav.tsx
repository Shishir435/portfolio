"use client"

import { Menu } from "lucide-react"
import { useState } from "react"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import { MobileNavLinks } from "@/lib/content"

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function closeMenu(linkName: string) {
    console.log(linkName)
    setIsMenuOpen(false)
  }
  return (
    <>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => {
          setIsMenuOpen((prev) => !prev)
        }}
      >
        <Menu />
      </div>
      {isMenuOpen && (
        <div className="fixed right-[80px] top-[80px] z-40 w-32 rounded-md bg-slate-300 p-4">
          <div className="flex w-full flex-col text-center">
            {MobileNavLinks.map(
              ({ linkName, linkTo }: { linkName: string; linkTo: string }) => (
                <div onClick={() => closeMenu(linkName)} key={linkName}>
                  <Link
                    href={linkTo}
                    className={`${buttonVariants({
                      variant: "ghost",
                    })} w-full capitalize text-black `}
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
  )
}

export default MobileNav

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
