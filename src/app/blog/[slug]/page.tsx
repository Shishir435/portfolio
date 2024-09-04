"use client"
import ReactMarkdownPreview from "@/components/blog/ReactMarkdownPreview"
import BlogSkeleton from "@/components/blog/skeletons/BlogSkeleton"
import ErrorSkeleton from "@/components/blog/skeletons/ErrorBlogSkeleton"
import NextHead from "@/components/NextHead"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import matter from "gray-matter"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const fetchMarkdownFile = async (slug: string): Promise<BlogPost> => {
  const response = await axios.get(`/api/blog/${slug}`)
  return response.data
}

export default function BlogPost() {
  const router = usePathname()
  const slug = router.split("/")[router.split("/").length - 1]
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchMarkdownFile(slug),
  })
  const { content } = matter(data?.content || "")
  return (
    <>
      <NextHead title={slug || "blog"} />
      <article className="flex flex-col items-center justify-center p-4">
        <main className="flex w-full max-w-6xl flex-col items-center justify-center">
          <div className="my-6 flex w-full items-center gap-2">
            <div className="w-1/12 cursor-pointer px-2">
              <Link href="/blog">
                <ArrowLeft />
              </Link>
            </div>
            <h1 className=" w-10/12 text-center text-2xl font-bold md:text-4xl">
              {slug}
            </h1>
          </div>
          {isLoading && <BlogSkeleton />}
          {error && <ErrorSkeleton />}
          {data && <ReactMarkdownPreview content={content} />}
          {!data && <BlogSkeleton />}
        </main>
      </article>
    </>
  )
}
