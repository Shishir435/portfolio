"use client";

import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";
import Link from "next/link";

const Contact = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const contactData = {
      name,
      email,
      message,
    };

    try {
      setLoading(true);
      const resposne = await axios.post("/api/portfolio/contact", contactData);
      console.log("successfully saved contact message", resposne);
      setEmail("");
      setName("");
      setMessage("");
      alert("successfully saved data");
    } catch (error) {
      console.log("somethig went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="!mt-25 mb-20">
      <div className="max-w-6xl mx-auto p-3 md:p-6">
        <h2 className="font-bold text-4xl my-4">Contact Me</h2>
        <div className="flex gap-4 w-full justify-between items-center">
          <div className="hidden md:block w-1/2">
            <div className=" flex flex-col gap-10">
              <p>Let's work Togather</p>
              <p>Alternatively you can email me at</p>
              <Link href="mailto:shishirchaurasiya435@gmail.com">
                <p className="text-blue-950">
                  shishirchaurasiya435@gmail.com
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-4 shadow-md  flex flex-col gap-8 rounded-md"
            >
              <div className="flex flex-col gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  maxLength={50}
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="test@gamil.com"
                  maxLength={100}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={3}
                  maxLength={500}
                  placeholder="Write Your Message Here"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)
                  }
                  required
                />
              </div>
              <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
            </form>
          </div>
        </div>
        <div className="md:hidden text-center mt-10 ">
          <p>Alternatively you can email me at</p>

          <Link href="mailto:shishirchaurasiya435@gmail.com">
            <p className="text-blue-950">
              shishirchaurasiya435@gmail.com
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
