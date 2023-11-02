"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
}
const page = () => {
  const [ContactMessages, setContactMessages] = useState<ContactMessage[]>([
    {
      _id: "uhsdk",
      name: "demo",
      email: "email@gmai.com",
      message: "demo message",
    },
  ]);
  const [loading, setLoading] = useState(false);
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

  return (
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {ContactMessages.map(({ _id, name, email, message }) => (
              <TableRow key={_id}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
