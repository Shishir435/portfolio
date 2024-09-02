"use client"
import BlogsSkeleton from "@/components/blog/skeletons/BlogsSkeleton"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import matter from "gray-matter"
import Link from "next/link"
import { remark } from "remark"
import strip from "strip-markdown"

const fetchMarkdownFiles = async (): Promise<BlogPost[]> => {
  const response = await axios.get<BlogPost[]>("/api/blog/fetch-markdown")
  return response.data
}
export default function BlogPage() {
  const { data, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: fetchMarkdownFiles,
  })

  return (
    <section className="container mx-auto mt-10">
      <div
        className={"mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}
      >
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <BlogsSkeleton key={index} />
          ))}
        {error && <p>Error loading blogs</p>}
        {data?.map((post) => {
          const slug = post.filename.replace(/\.md$/, "")
          const { content, data: frontMatter } = matter(post.content)
          const snippet =
            remark().use(strip).processSync(content).toString().slice(0, 100) +
            "..."

          return (
            <Link key={slug} href={`/blog/${slug}`} passHref>
              <p className="rounded border p-4 shadow">
                <h2 className="text-xl font-semibold">
                  {frontMatter.title || slug}
                </h2>
                <p className="mt-2">{snippet}</p>
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
