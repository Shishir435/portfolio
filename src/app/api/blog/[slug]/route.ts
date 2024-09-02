import { NextResponse } from "next/server"
import axios from "axios"

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 })
  }

  const repoOwner = "Shishir435"
  const repoName = "obsidianNotes"
  const branch = "main"
  const folderPath = "posts" // e.g., "posts"
  const token = process.env.GITHUB_ACCESS_TOKEN

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}/${slug}.md?ref=${branch}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3.raw",
        },
      }
    )

    const fileContent = response.data

    return NextResponse.json({
      filename: `${slug}.md`,
      content: fileContent,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: `Failed to fetch markdown file: ${error.message}` },
      { status: 500 }
    )
  }
}
