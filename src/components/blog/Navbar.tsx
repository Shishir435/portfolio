import React from "react"
import ThemeButton from "./ThemeButton"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex h-14 w-full items-center justify-between border-b-DEFAULT border-gray-500 px-6 py-4 shadow-sm sm:px-8 md:px-10 lg:px-20">
      <div className="text-xl font-bold md:text-3xl lg:text-4xl">
        <Link href="/blog">Blog</Link>
      </div>
      <ThemeButton />
    </nav>
  )
}

export default Navbar
