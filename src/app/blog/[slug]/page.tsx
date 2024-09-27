import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import BlogPost from "@/components/blog/blog-post";
import NextHead from "@/components/next-head";
import { fetchMarkdownFile } from "@/lib/api-request";

export default async function Page({ params }: { params: { slug: string } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["blogPost", params.slug],
    queryFn: () => fetchMarkdownFile(params.slug),
  });
  return (
    <>
      <NextHead title={params.slug || "blog"} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogPost slug={params.slug} />
      </HydrationBoundary>
    </>
  );
}
