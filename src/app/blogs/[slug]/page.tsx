"use client"
import MarkdownPreview from "@/components/blog/MarkdownPreview"
import NextHead from "@/components/NextHead"
import BlogSkeleton from "@/components/skeletons/BlogSkeleton"
import ErrorSkeleton from "@/components/skeletons/ErrorBlogSkeleton"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import matter from "gray-matter"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const fetchMarkdownFile = async (slug: string): Promise<BlogPost> => {
  const response = await axios.get(`/api/blogs/${slug}`)
  return response.data
}

export default function BlogPost() {
  const router = usePathname()
  const slug = router.split("/")[router.split("/").length - 1]
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchMarkdownFile(slug),
  })
  const [pageTitle, setPageTitle] = useState(slug)

  useEffect(() => {
    if (data) {
      const { data: frontMatter } = matter(data.content)
      setPageTitle(frontMatter.title || slug)
    }
  }, [data, slug])
  const { content } = matter(data?.content || "")
  return (
    <>
      <NextHead pageTitle={slug || "blog"} />
      <article className="flex flex-col items-center justify-center p-4">
        <h1 className="text-center text-4xl font-bold">{pageTitle || slug}</h1>
        <main className="flex max-w-5xl flex-col items-center justify-center">
          {!data && <BlogSkeleton />}
          {data && <MarkdownPreview content={content} />}
          {isLoading && <BlogSkeleton />}
          {error && <ErrorSkeleton />}
        </main>
      </article>
    </>
  )
}