"use client"
import MarkdownStyles from "@/components/blog/MarkdownContainer"
import NextHead from "@/components/NextHead"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import matter from "gray-matter"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { remark } from "remark"
import html from "remark-html"

const fetchMarkdownFiles = async () => {
  const response = await axios.get("/api/blogs/fetch-markdown")
  return response.data
}

export default function BlogPost() {
  const router = usePathname()
  const slug = router.split("/")[2]
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchMarkdownFiles,
  })
  const [pageTitle, setPageTitle] = useState(slug)

  useEffect(() => {
    if (data) {
      const file = data.find((post: any) => post.filename === `${slug}.md`)
      if (file) {
        const { data: frontMatter } = matter(file.content)
        setPageTitle(frontMatter.title || slug)
      }
    }
  }, [data, slug])

  if (isLoading) return <p>Loading post...</p>
  if (error) return <p>Error loading post</p>

  const file = data.find((post: any) => post.filename === `${slug}.md`)

  if (!file) return <p>Post not found</p>

  const { content } = matter(file.content)
  const processedContent = remark().use(html).processSync(content).toString()

  return (
    <>
      <NextHead pageTitle={pageTitle} />
      <article className="p-4">
        <h1 className="text-center text-4xl font-bold">{pageTitle || slug}</h1>
        <MarkdownStyles>
          <div dangerouslySetInnerHTML={{ __html: processedContent }} />
        </MarkdownStyles>
      </article>
    </>
  )
}
