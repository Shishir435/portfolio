import { RepositoryTagsBackgroundColors } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
interface ProjectCard {
  name: string
  description: string
  tags: RepositoryTopic[]
  source_code_link: string
  live_demo_link: string
}

const ProjectCard = ({
  name,
  description,
  tags,
  source_code_link,
  live_demo_link,
}: ProjectCard) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-[#f6f5fe] to-[#ececec] p-1 shadow-md ">
      <div className="mt-5 px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link
              href={live_demo_link}
              target="_blank"
              title="Click to see demo"
            >
              <h3 className="text-[24px] font-bold capitalize text-black">
                {name}
              </h3>
            </Link>
          </div>
          <div className=" inset-0 m-3 flex gap-5 ">
            <div className="">
              <Link
                href={source_code_link}
                target="_blank"
                title="Github Repo Link"
              >
                <Image
                  src="/github30.png"
                  alt="github_link"
                  height="30"
                  width="30"
                  style={{ height: "auto" }}
                  className=" bg-transparent object-contain"
                />
              </Link>
            </div>
            <div className="">
              <Link
                href={live_demo_link}
                target="_blank"
                title="Live Website Link"
              >
                <Image
                  src="/website30.png"
                  alt="website_link"
                  height={30}
                  width={30}
                  style={{ height: "auto" }}
                  className="bg-transparent object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-2 text-[14px]">{description}</p>
      </div>
      <div className="my-4 flex flex-wrap gap-2 px-4">
        {tags.length > 0 ? (
          tags.map((tag, index) => {
            const backgroundColor =
              RepositoryTagsBackgroundColors[
                index % RepositoryTagsBackgroundColors.length
              ]
            return (
              <span
                key={`${tag.topic.name}-${index}`}
                className={cn(
                  "text-sm px-1.5 py-0.5 rounded-full",
                  backgroundColor
                )}
              >
                {tag.topic.name || ""}
              </span>
            )
          })
        ) : (
          <p>No Tags Available</p>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
