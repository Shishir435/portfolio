//@ts-nocheck
import React from "react"
import MarkdownPreview from "@uiw/react-markdown-preview"
import { useTheme } from "next-themes"
function ReactMarkdownPreview({ content }: { content: string }) {
  const { resolvedTheme } = useTheme()
  const theme =
    resolvedTheme === "dark" || resolvedTheme === "light"
      ? resolvedTheme
      : "dark"
  return (
    <MarkdownPreview
      source={content}
      rehypeRewrite={(node, index, parent) => {
        if (
          node.tagName === "a" &&
          parent &&
          /^h(1|2|3|4|5|6)/.test(parent.tagName)
        ) {
          parent.children = parent.children.slice(1)
        }
      }}
      className="w-full p-4"
      wrapperElement={{
        "data-color-mode": theme,
      }}
    />
  )
}

export default ReactMarkdownPreview
