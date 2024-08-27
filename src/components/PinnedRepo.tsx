"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"

const fetchPinnedRepositories = async (): Promise<
  PinnedRepositoriesResponse | undefined
> => {
  try {
    const response = await axios.get<PinnedRepositoriesResponse>(
      "/api/portfolio/pinned-repo"
    )
    return response.data
  } catch (error) {
    console.error("Error fetching pinned repositories:", error)
  }
}

export default function PinnedRepo() {
  const [data, setData] = useState<PinnedRepositoriesResponse | null>(null)

  useEffect(() => {
    fetchPinnedRepositories().then((data) => {
      if (data) {
        setData(data)
      }
    })
  }, [])

  return (
    <section id="work" className="mt-24">
      <div className="mx-auto max-w-6xl p-6">
        <p>Portfolio</p>
        <h2 className="my-4 text-4xl font-bold">My recent Works</h2>
        <div className="flex w-full">
          <p className="mt-3 max-w-3xl text-[17px] leading-[30px]">
            The projects listed below demonstrate my abilities and skills
            through real-world examples of my work. Each project has a brief
            description and links to code repositories and live demos.
          </p>
        </div>
        {data ? (
          <div className="xs:grid-cols-1 mt-20 grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {data.data.user.pinnedItems.nodes.map((repo) => (
              <ProjectCard
                key={repo.url}
                name={repo.name}
                description={repo.description}
                tags={repo.repositoryTopics.nodes}
                source_code_link={repo.url}
                live_demo_link={repo.homepageUrl}
              />
            ))}
          </div>
        ) : (
          <p>Loading Projects...</p>
        )}
      </div>
    </section>
  )
}
