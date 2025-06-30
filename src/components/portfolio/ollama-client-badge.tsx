"use client";

import { useEffect, useState } from "react";

import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

export default function OllamaClientBadge() {
  const [version, setVersion] = useState<string | null>("v0.1.10");

  useEffect(() => {
    fetch(
      "https://img.shields.io/chrome-web-store/v/bfaoaaogfcgomkjfbmfepbiijmciinjl.json"
    )
      .then((res) => res.json())
      .then((data) => setVersion(data.value))
      .catch(() => setVersion(null));
  }, []);

  return (
    <a
      href="https://chromewebstore.google.com/detail/ollama-client/bfaoaaogfcgomkjfbmfepbiijmciinjl"
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({ variant: "ghost" })}
    >
      <span>Install Ollama Client</span>
      <Badge className="ml-2 min-w-[40px] px-2">{version}</Badge>
    </a>
  );
}
