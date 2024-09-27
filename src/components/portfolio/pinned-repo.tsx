"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import ProjectCard from "./project-card";
import { SkeletonProjectCard } from "./skeletons/skeleton-project-card";

const fetchPinnedRepositories =
  async (): Promise<PinnedRepositoriesResponse> => {
    const response = await axios.get<PinnedRepositoriesResponse>(
      "/api/portfolio/pinned-repo"
    );
    return response.data;
  };

export default function PinnedRepo() {
  const { data, error, isLoading } = useQuery<PinnedRepositoriesResponse>({
    queryKey: ["pinnedRepositories"],
    queryFn: fetchPinnedRepositories,
  });

  return (
    <section id="work" className="mt-24">
      <div className="mx-auto max-w-6xl p-6">
        <h2 className="my-4 text-3xl font-bold">Personal Projects</h2>
        <div className="xs:grid-cols-1 mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {isLoading && (
            <>
              {[...Array(3)].map((_, index) => (
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
