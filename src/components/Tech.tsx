import { Technologies } from "@/lib/content";
import TechCard from "./TechCard";

const Tech = () => {
  return (
    <section id="tech" className="mt-20">
      <div className="flex flex-row flex-wrap justify-center  p-6 max-w-6xl mx-auto">
        {Technologies.map((technology) => (
          <div className="w-20 h-20 m-5" key={technology.name}>
            <TechCard name={technology.name} icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
