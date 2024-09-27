import { NextResponse } from "next/server";

import axios from "axios";

export async function GET() {
  const repoOwner = "Shishir435";
  const repoName = "obsidianNotes";
  const branch = "main";
  const folderPath = "posts"; // e.g., "posts"
  const token = process.env.GITHUB_ACCESS_TOKEN;

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}?ref=${branch}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );

    const files = response.data;

    const markdownFiles = await Promise.all(
      files.map(async (file: any) => {
        const fileResponse = await axios.get(file.download_url);
        return {
          filename: file.name,
          content: fileResponse.data,
        };
      })
    );

    return NextResponse.json(markdownFiles);
  } catch (error: any) {
    return NextResponse.json(
      { error: `Failed to fetch markdown files: ${error.message}` },
      { status: 500 }
    );
  }
}
