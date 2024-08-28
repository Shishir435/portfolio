import Image from "next/image";
import Link from "next/link";
import { IProjectCard } from "~/types/portfolio";
import Tag from "./Tag";

const ProjectCard = ({
  name,
  description,
  tags,
  source_code_link,
  live_demo_link,
}: IProjectCard) => {
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
      <div className="my-4 flex flex-wrap gap-1 px-4">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <Tag
              key={`${tag.topic} + ${index}`}
              topic={tag.topic}
              index={index}
            />
          ))
        ) : (
          <p>No Tags Available</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
