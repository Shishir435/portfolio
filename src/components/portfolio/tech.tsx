import { Technologies } from "@/lib/content";

import TechCard from "./tech-card";

const Tech = () => {
  return (
    <section id="tech" className="mt-20">
      <div className="mx-auto flex max-w-6xl flex-row flex-wrap justify-center p-6">
        {Technologies.map((technology) => (
          <div className="m-5 size-20" key={technology.name}>
            <TechCard name={technology.name} icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
