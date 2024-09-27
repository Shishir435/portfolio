import NextHead from "@/components/NextHead"
import BlogPost from "@/components/blog/blogPost"
import { fetchMarkdownFile } from "@/lib/apiRequest"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"

export default async function Page({ params }: { params: { slug: string } }) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["blogPost", params.slug],
    queryFn: () => fetchMarkdownFile(params.slug),
  })
  return (
    <>
      <NextHead title={params.slug || "blog"} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogPost slug={params.slug} />
      </HydrationBoundary>
    </>
  )
}
