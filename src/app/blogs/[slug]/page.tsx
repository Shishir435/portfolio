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

const fetchMarkdownFile = async (slug: string): Promise<BlogPost> => {
  const response = await axios.get<BlogPost>(`/api/blogs/${slug}`)
  return response.data
}

export default function BlogPost() {
  const router = usePathname()
  const slug = router.split("/")[2]
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchMarkdownFile(slug),
  })
  console.log(data)
  const [pageTitle, setPageTitle] = useState(slug)

  useEffect(() => {
    if (data) {
      const { data: frontMatter } = matter(data.content)
      setPageTitle(frontMatter.title || slug)
    }
  }, [data, slug])

  if (isLoading) return <p>Loading post...</p>
  if (error) return <p>Error loading post</p>

  if (!data) return <p>Post not found</p>

  const { content } = matter(data.content)
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
