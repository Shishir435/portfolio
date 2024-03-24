import Link from "next/link"
import { buttonVariants } from "./ui/button"
import MobileNav from "./MobileNav"
import { DesktopNavLinks } from "@/lib/content"
import Circle from "./Circle"

const Navbar = () => {
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
        {/* Mobile naigation */}
        <MobileNav />
      </div>
    </>
  )
}

export default Navbar
