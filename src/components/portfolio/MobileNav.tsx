"use client"
import { MobileNavLinks } from "@/lib/content"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const MobileNav = () => {
  return (
    <div className="cursor-pointer md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" size="icon">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {MobileNavLinks.map(
            ({ linkName, linkTo }: { linkName: string; linkTo: string }) => (
              <DropdownMenuItem key={linkName}>
                <Link
                  href={linkTo}
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} w-full capitalize text-black `}
                >
                  {linkName}
                </Link>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileNav
