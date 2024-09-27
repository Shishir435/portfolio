import { fetchMarkdownFiles } from "@/lib/apiRequest"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"
import BlogPosts from "@/components/blog/blogPosts"

export default async function BlogPage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: fetchMarkdownFiles,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogPosts />
    </HydrationBoundary>
  )
}
