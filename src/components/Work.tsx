import { Projects } from "@/lib/content"
import ProjectCard from "./ProjectCard"

const Work = () => {
  return (
    <>
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
          <div className="xs:grid-cols-1 mt-20 grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
            {Projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
