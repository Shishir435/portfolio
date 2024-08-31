"use client"

import { Menu } from "lucide-react"
import { useRef, useState } from "react"
import { buttonVariants } from "../ui/button"
import Link from "next/link"
import { MobileNavLinks } from "@/lib/content"
import { useClickAway } from "react-use"

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)
  useClickAway(divRef, () => setIsMenuOpen(false))
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
        <div
          ref={divRef}
          className="fixed right-[80px] top-[80px] z-40 w-32 rounded-md bg-slate-200 p-4"
        >
          <div className="flex w-full flex-col text-center">
            {MobileNavLinks.map(
              ({ linkName, linkTo }: { linkName: string; linkTo: string }) => (
                <div onClick={() => setIsMenuOpen(false)} key={linkName}>
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
