import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import React, {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { Button } from "./ui/button";
const AuthAdminCheck = ({
  setIsAdmin,
}: {
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameType, setUsernameType] = useState<"text" | "password">(
    "password"
  );
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );
  function handleAdminSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleAdminValidation(username, password);
    setPassword("");
    setUsername("");
  }

  async function handleAdminValidation(username: string, password: string) {
    try {
      const { data } = await axios.get("/api/portfolio/auth");
      const { resp } = data;
      const admin = resp[0];

      if (admin.username === username && admin.password === password) {
        setIsAdmin(true);
        // Save admin data with expiration time to local storage
        const expiration = Date.now() + 5 * 60 * 1000; // 5 minutes
        localStorage.setItem(
          "adminData",
          JSON.stringify({ username, password, expiration })
        );
      } else {
        setIsAdmin(false);
        alert(
          "This site is reserved for administrators only. Please refrain from accessing this page if you are not an admin."
        );
      }
    } catch (error: any) {
      console.error(error.message);
      setIsAdmin(false);
      alert("Something went wrong while validating credentials");
    }
  }

  useEffect(() => {
    const storedAdminData = localStorage.getItem("adminData");
    if (storedAdminData) {
      const adminData = JSON.parse(storedAdminData);
      const { username, password, expiration } = adminData;

      if (expiration > Date.now()) {
        handleAdminValidation(username, password);
      } else {
        localStorage.removeItem("adminData");
      }
    }
  }, []);

  return (
    <div className="grid place-content-center min-h-screen gap-10 px-5">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        "This site is exclusively for administrators."
      </h1>
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
                  className="col-span-3 relative"
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
                    );
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
                    );
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
  );
};

export default AuthAdminCheck;
