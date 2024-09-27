import axios from "axios";

export const fetchMarkdownFiles = async (): Promise<BlogPost[]> => {
  const response = await axios.get<BlogPost[]>("/api/blog/fetch-markdown");
  return response.data;
};

export const fetchMarkdownFile = async (slug: string): Promise<BlogPost> => {
  const response = await axios.get(`/api/blog/${slug}`);
  return response.data;
};
