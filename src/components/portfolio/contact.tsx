"use client";

import Link from "next/link";
import React, { FormEvent, useRef, useState } from "react";

import axios from "axios";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "../ui/button";

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
      const response = await axios.post("/api/portfolio/contact", contactData);
      if (response.status === 200) {
        setEmail("");
        setName("");
        setMessage("");
        toast.success("Message Sent");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mb-20 mt-24">
      <div className="mx-auto max-w-6xl p-3 md:p-6">
        <h2 className="my-4 text-4xl font-bold">Contact Me</h2>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="hidden w-1/2 md:block">
            <div className="flex flex-col gap-10">
              <p>Let&apos;s work Together</p>
              <p>Alternatively you can email me at</p>
              <Link href="mailto:shishirchaurasiya435@gmail.com">
                <p className="text-blue-950">shishirchaurasiya435@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="w-full shadow-md md:w-1/2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 rounded-md p-4 shadow-md"
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
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center md:hidden">
          <p>Alternatively you can email me at</p>
          <Link href="mailto:shishirchaurasiya435@gmail.com">
            <p className="text-blue-950">shishirchaurasiya435@gmail.com</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
