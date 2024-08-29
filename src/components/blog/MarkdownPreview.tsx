import { cn } from "@/lib/utils"
import "highlight.js/styles/atom-one-dark.min.css"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import CopyButton from "./CopyButton"

export default function MarkdownPreview({
  content,
  className = "sm:p-10",
}: {
  content: string
  className?: string
}) {
  return (
    <Markdown
      className={cn("dark:text-gray-200 space-y-8", className)}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 {...props} className="text-3xl font-bold" />
        },
        h2: ({ node, ...props }) => {
          return <h1 {...props} className="my-10 text-2xl font-bold" />
        },
        h3: ({ node, ...props }) => {
          return <h1 {...props} className="my-10 text-xl font-bold" />
        },
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "")
          const id = (Math.floor(Math.random() * 100) + 1).toString()
          if (match?.length) {
            return (
              <div className="rounded-md border-[0.5px] border-zinc-500 bg-slate-600 text-gray-300">
                <div className="flex items-center justify-between border-b-[0.5px] border-zinc-500 px-5 py-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-400">{match[1] || ""}</p>
                  </div>
                  <CopyButton id={id} />
                </div>
                <div className="w-full overflow-x-auto">
                  <div className="p-5" id={id}>
                    {children}
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <code
                className="break-words rounded-sm px-2 py-1 text-lg"
                {...props}
              >
                {children}
              </code>
            )
          }
        },
      }}
    >
      {content}
    </Markdown>
  )
}
