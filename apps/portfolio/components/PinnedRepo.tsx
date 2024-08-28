"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { SkeletonProjectCard } from "./skeletons/SkeletonProjectCard";
import { IPinnedRepositoriesResponse } from "~/types/portfolio";

const fetchPinnedRepositories =
  async (): Promise<IPinnedRepositoriesResponse> => {
    const response =
      await axios.get<IPinnedRepositoriesResponse>("/api/pinned-repo");
    return response.data;
  };

export default function PinnedRepo() {
  const { data, error, isLoading } = useQuery<IPinnedRepositoriesResponse>({
    queryKey: ["pinnedRepositories"],
    queryFn: fetchPinnedRepositories,
  });

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
        <div className="xs:grid-cols-1 mt-20 grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {isLoading && (
            <>
              {[...Array(6)].map((_, index) => (
                <SkeletonProjectCard key={index} />
              ))}
            </>
          )}
          {error && <p>Error fetching projects</p>}
          {data?.data.user.pinnedItems.nodes.map((repo) => (
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
      </div>
    </section>
  );
}
