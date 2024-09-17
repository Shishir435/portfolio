import axios from "axios"

export async function GET() {
  const endpoint = "https://api.github.com/graphql"
  const token = process.env.GITHUB_ACCESS_TOKEN

  const query = `
    query {
      user(login: "Shishir435") {
        pinnedItems(first: 3) {
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
  `

  try {
    const response = await axios.post<PinnedRepositoriesResponse>(
      endpoint,
      {
        query: query,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any) {
    console.error("Error fetching pinned repositories:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.response?.status || 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
