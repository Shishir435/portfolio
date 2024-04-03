"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { Eye, EyeOff } from "lucide-react"
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react"
import Overlay from "./Overlay"
import { Button } from "./ui/button"
import { toast } from "sonner"
const AuthAdminCheck = ({
  setIsAdmin,
}: {
  setIsAdmin: Dispatch<SetStateAction<boolean>>
}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernameType, setUsernameType] = useState<"text" | "password">(
    "password"
  )
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  )

  const [isLoading, setIsLoading] = useState(false)
  function handleAdminSubmit(e: React.FormEvent) {
    e.preventDefault()
    handleAdminValidation(username, password)
    setPassword("")
    setUsername("")
  }

  const handleAdminValidation = useCallback(
    async (username: string, password: string) => {
      try {
        setIsLoading(true)
        const response = await axios.post("/api/portfolio/auth", {
          username,
          password,
        })
        console.log(response)
        if (response.data.isAuthenticated) {
          setIsAdmin(true)
          toast.success("Welcome Admin")
        } else {
          toast.error("You are not an Admin")
          setIsAdmin(false)
        }
      } catch (error: any) {
        console.error(error.message)
        setIsAdmin(false)
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    },
    [setIsAdmin]
  )

  return (
    <div className="grid min-h-screen place-content-center gap-10 px-5">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        &quot;This site is exclusively for administrators.&quot;
      </h1>
      {isLoading && <Overlay />}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Enter Credentail</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Credentail</DialogTitle>
            <DialogDescription>Enter Your Credentail.</DialogDescription>
          </DialogHeader>
          <form action="" onSubmit={handleAdminSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  className="relative col-span-3"
                  type={usernameType}
                  value={username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                  }
                  required
                />
                <div
                  className="absolute right-8"
                  onClick={() => {
                    setUsernameType(
                      usernameType === "password" ? "text" : "password"
                    )
                  }}
                >
                  {usernameType === "password" ? <EyeOff /> : <Eye />}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type={passwordType}
                  className="col-span-3"
                  required
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
                <div
                  className="absolute right-8"
                  onClick={() => {
                    setPasswordType(
                      passwordType === "password" ? "text" : "password"
                    )
                  }}
                >
                  {passwordType === "password" ? <EyeOff /> : <Eye />}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Button type="submit" className="col-span-4">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AuthAdminCheck
