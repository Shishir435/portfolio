"use client"

import { CopyCheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"

export default function CopyButton({ id }: { id: string }) {
  const [onCopy, setOnCopy] = useState(false)
  const [onSuccess, setSuccess] = useState(false)

  const handleCopy = async () => {
    let text = document.getElementById(id)!.textContent
    try {
      await navigator.clipboard.writeText(text!)
      setOnCopy(true)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }
  return (
    <div
      className="relative cursor-pointer rounded-md p-2 hover:scale-105 hover:bg-zinc-700"
      onClick={handleCopy}
    >
      <CopyCheckIcon
        className={`size-5  cursor-pointer text-green-500 transition-all ${
          onSuccess ? "scale-100 " : "scale-0 "
        }`}
        onTransitionEnd={() => {
          setTimeout(() => {
            setSuccess(false)
            setOnCopy(false)
          }, 500)
        }}
      />

      <div className=" absolute left-0 top-0 flex size-full items-center justify-center">
        <CopyIcon
          className={`transition-all ${onCopy ? "scale-0" : "scale-100 "}`}
          onTransitionEnd={() => {
            if (onCopy) {
              setSuccess(true)
            }
          }}
        />
      </div>
    </div>
  )
}
