import { Projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <>
      <section id="work" className="mt-25">
        <div className="p-6 max-w-6xl mx-auto">
          <p>Portfolio</p>
          <h2 className="font-bold text-4xl my-4">My recent Works</h2>
          <div className="w-full flex">
            <p className="mt-3 text-[17px] max-w-3xl leading-[30px]">
              The projects listed below demonstrate my abilities and skills
              through real-world examples of my work. Each project has a brief
              description and links to code repositories and live demos.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
            {Projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
