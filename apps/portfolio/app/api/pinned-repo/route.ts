import axios from "axios";
import { IPinnedRepositoriesResponse } from "~/types/portfolio";

export async function GET() {
  const endpoint = "https://api.github.com/graphql";
  const token = process.env.GITHUB_ACCESS_TOKEN;

  const query = `
    query {
      user(login: "Shishir435") {
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              name
              description
              homepageUrl
              url
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post<IPinnedRepositoriesResponse>(
      endpoint,
      {
        query: query,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Cache the response for 20 minutes (1200 seconds)
        "Cache-Control": "public, max-age=1200, stale-while-revalidate=600",
      },
    });
  } catch (error: any) {
    console.error("Error fetching pinned repositories:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.response?.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
