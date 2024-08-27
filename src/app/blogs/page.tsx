"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import axios from "axios"
import NextHead from "@/components/NextHead"

interface BlogPost {
  filename: string
  content: string
}

const fetchMarkdownFiles = async (): Promise<BlogPost[]> => {
  const response = await axios.get<BlogPost[]>("/api/blogs/fetch-markdown")
  return response.data
}

export default function BlogPage() {
  const { data, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: fetchMarkdownFiles,
  })

  if (isLoading) return <p>Loading blogs...</p>
  if (error) return <p>Error loading blogs</p>

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
          {data?.map((post) => {
            const slug = post.filename.replace(/\.md$/, "")
            return (
              <Link key={slug} href={`/blogs/${slug}`} passHref>
                <p className="rounded border p-4 shadow">
                  <h2 className="text-xl font-semibold">{slug}</h2>
                  <p className="text-gray-700">
                    {post.content.slice(0, 100)}...
                  </p>
                </p>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
