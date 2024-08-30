import Link from "next/link"
import { buttonVariants } from "./ui/button"
import MobileNav from "./MobileNav"
import { DesktopNavLinks } from "@/lib/content"
import Circle from "./Circle"

const Navbar = () => {
  return (
    <>
      <div className="relative flex h-[125px] w-full items-center justify-between overflow-hidden px-5 py-8 md:px-14 lg:px-20">
        <div className="text-2xl font-bold ">
          <Link href="/">
            <p className="text-gradient ">
              Shishir <span className="hidden sm:inline-block">Chaurasiya</span>
            </p>
          </Link>
        </div>
        {/* circles */}
        <Circle />
        {/* Desktop navigation */}
        <div className="hidden md:block">
          <div className="flex items-center">
            {DesktopNavLinks.map(
              ({ linkName, linkTo }: { linkName: string; linkTo: string }) => (
                <div key={linkName}>
                  <Link
                    href={linkTo}
                    className={`${buttonVariants({ variant: "ghost" })} capitalize `}
                  >
                    {linkName}
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <div>
            <Link
              href="#contact"
              className={`${buttonVariants({
                variant: "outline",
              })} !rounded-2xl border-2 px-7`}
            >
              Contact Me
            </Link>
          </div>
        </div>
        {/* Mobile navigation */}
        <MobileNav />
      </div>
    </>
  )
}

export default Navbar
