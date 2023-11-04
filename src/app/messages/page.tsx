"use client";

import AuthAdminCheck from "@/components/AuthAdminCheck";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useState } from "react";

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
  resolve: boolean;
}

const page = () => {
  const [ContactMessages, setContactMessages] = useState<ContactMessage[]>([]);

  const [loading, setLoading] = useState(false);
  const [isResolveing, setIsResolving] = useState(false);
  const [IsAdmin, setIsAdmin] = useState(false);

  function stringTobool(data: string) {
    if (data === "true") return true;
    return false;
  }
  async function handleCheckBoxChnage(_id: string, value: boolean | string) {
    // Convert the value to a boolean if it's a string
    const boolVal = typeof value === "string" ? stringTobool(value) : value;

    setContactMessages((prevContactMessages) => {
      return prevContactMessages.map((message) => {
        if (message._id === _id) {
          // Optimistic update: Update the resolve value
          return { ...message, resolve: boolVal };
        }
        return message;
      });
    });

    const patchData = {
      id: _id,
      resolveValue: boolVal,
    };

    try {
      setIsResolving(true);
      const response = await axios.patch("/api/portfolio/contact", patchData);
      // Successful API call, no need for additional UI updates
      // console.log(response);
    } catch (error) {
      console.error("handleCheckBoxChnage", error);

      // If the API call fails, revert the local state to its previous value
      setContactMessages((prevContactMessages) => {
        return prevContactMessages.map((message) => {
          if (message._id === _id) {
            return { ...message, resolve: !boolVal };
          }
          return message;
        });
      });
    } finally {
      setIsResolving(false);
    }
  }

  async function handleClick() {
    try {
      setLoading(true);
      const resposne = await axios.get("/api/portfolio/contact");
      setContactMessages(resposne.data.resp);
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Oops somethis went wrong please check console for more info");
    } finally {
      setLoading(false);
    }
  }

  return IsAdmin ? (
    <div className="flex flex-col justify-center items-center p-6 gap-10">
      <Button onClick={handleClick}>
        {loading ? "fetching messages" : "fetch messages"}
      </Button>
      <div>
        <Table>
          <TableCaption>A list of your recent messages.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Resolve</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ContactMessages.map(({ _id, name, email, message, resolve }) => (
              <TableRow key={_id}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{message}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={resolve}
                    onCheckedChange={(value) => {
                      //  console.log(value)
                      handleCheckBoxChnage(_id, value);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  ) : (
    <AuthAdminCheck setIsAdmin={setIsAdmin} />
  );
};

export default page;
