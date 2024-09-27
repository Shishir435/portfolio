import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import BlogPosts from "@/components/blog/blog-posts";
import { fetchMarkdownFiles } from "@/lib/api-request";

export default async function BlogPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: fetchMarkdownFiles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogPosts />
    </HydrationBoundary>
  );
}
