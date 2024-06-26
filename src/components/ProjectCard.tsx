import Image from "next/image"
import Link from "next/link"
import { v4 as uuid } from "uuid"
interface Tag {
  name: string
  color: string
}
interface ProjectCard {
  name: string
  description: string
  tags: Tag[]
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
              <h3 className="text-[24px] font-bold text-black">{name}</h3>
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
        <Link href={live_demo_link} target="_blank" title="Click to see demo">
          <p className="mt-2 text-[14px]">{description}</p>
        </Link>
      </div>
      <Link href={live_demo_link} target="_blank" title="Click to see demo">
        <div className="my-4 flex flex-wrap gap-2 px-4">
          {tags.map((tag) => (
            <p key={uuid()} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
