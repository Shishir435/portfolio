"use client";

import Link from "next/link";

import { useQuery } from "@tanstack/react-query";
import matter from "gray-matter";
import { remark } from "remark";
import strip from "strip-markdown";

import BlogsSkeleton from "@/components/blog/skeletons/blogs-skeleton";
import { fetchMarkdownFiles } from "@/lib/api-request";

const BlogPosts = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: fetchMarkdownFiles,
  });

  return (
    <section className="mx-auto mt-10 p-5">
      <div className="mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <BlogsSkeleton key={index} />
          ))}
        {error && <p>Error loading blogs</p>}
        {posts?.map((post) => {
          const slug = post.filename.replace(/\.md$/, "");
          const { content, data: frontMatter } = matter(post.content);
          const snippet = `${remark()
            .use(strip)
            .processSync(content)
            .toString()
            .slice(0, 100)}...`;

          return (
            <Link key={slug} href={`/blog/${slug}`} passHref>
              <div className="rounded border p-4 shadow">
                <h2 className="text-xl font-semibold">
                  {frontMatter.title || slug}
                </h2>
                <p className="mt-2">{snippet}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPosts;
