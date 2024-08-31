"use client"
import NextHead from "@/components/NextHead"
import { useQuery } from "@tanstack/react-query"
import matter from "gray-matter"
import { remark } from "remark"
import strip from "strip-markdown"
import Link from "next/link"
import axios from "axios"

const fetchMarkdownFiles = async (): Promise<BlogPost[]> => {
  const response = await axios.get<BlogPost[]>("/api/blogs/fetch-markdown")
  return response.data
}
export default function BlogPage() {
  const { data, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: fetchMarkdownFiles,
  })

  return (
    <>
      <NextHead pageTitle="Blogs Page" />
      <section className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div
          className={
            "mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {isLoading && <p>Loading blogs...</p>}
          {error && <p>Error loading blogs</p>}
          {data?.map((post) => {
            const slug = post.filename.replace(/\.md$/, "")
            const { content, data: frontMatter } = matter(post.content)
            const snippet =
              remark()
                .use(strip)
                .processSync(content)
                .toString()
                .slice(0, 100) + "..."

            return (
              <Link key={slug} href={`/blogs/${slug}`} passHref>
                <p className="rounded border p-4 shadow">
                  <h2 className="text-xl font-semibold">
                    {frontMatter.title || slug}
                  </h2>
                  <p className="text-gray-700">{snippet}</p>
                </p>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
