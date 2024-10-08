"use client";

import { useState } from "react";

import axios from "axios";

import AuthAdminCheck from "@/components/portfolio/auth-admin-check";
import Overlay from "@/components/portfolio/overlay";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
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
  resolve: boolean;
}

const Page = () => {
  const [ContactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResolving, setIsResolving] = useState(false);
  const [IsAdmin, setIsAdmin] = useState(false);
  const [getFetchType, setGetFetchType] = useState<string>("all");
  function stringToBool(data: string) {
    if (data === "true") return true;
    return false;
  }
  async function handleCheckBoxChange(_id: string, value: boolean | string) {
    const boolVal = typeof value === "string" ? stringToBool(value) : value;

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
      console.error("handleCheckBoxChange", error);

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

  async function fetchMessages(fetchType: string) {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `/api/portfolio/contact?fetchType=${fetchType}`
      );
      setContactMessages(response.data.resp);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("Oops something went wrong please check console for more info");
    } finally {
      setIsLoading(false);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const fetchType = event.currentTarget.getAttribute("data-fetch");
    let mock = "all";

    fetchType ? fetchMessages(fetchType) : fetchMessages(mock);
    fetchType ? setGetFetchType(fetchType) : setGetFetchType("all");
  }

  return IsAdmin ? (
    <div className="flex flex-col items-center justify-center gap-10 p-6">
      {/* Loading state overlay */}
      {isLoading && <Overlay />}

      <div className="flex flex-wrap gap-4">
        <div>
          <Button onClick={handleClick} data-fetch="all">
            All
          </Button>
        </div>
        <div>
          <Button onClick={handleClick} data-fetch="unresolved">
            Unresolved
          </Button>
        </div>
        <div>
          <Button onClick={handleClick} data-fetch="resolved">
            Resolved
          </Button>
        </div>
      </div>
      <div>
        <h1 className="text-center">
          {ContactMessages.length === 0 && getFetchType === "all"
            ? "please click on all button to fetch "
            : `You have ${ContactMessages.length} ${getFetchType} `}{" "}
          messages.{" "}
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead className="text-center">Resolve</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ContactMessages.map(({ _id, name, email, message, resolve }) => (
              <TableRow key={_id}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{message}</TableCell>
                <TableCell className="text-center">
                  <Checkbox
                    checked={resolve}
                    onCheckedChange={(value) => {
                      handleCheckBoxChange(_id, value);
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

export default Page;
