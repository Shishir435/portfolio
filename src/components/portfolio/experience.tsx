import { Experiences } from "@/lib/content";

import ExperienceCard from "./experience-card";

const Experience = () => {
  return (
    <section className="space-y-6">
      <div className="mx-auto max-w-6xl p-6">
        <h2 className="my-4 text-3xl font-bold">Work Experience</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {Experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              designation={exp.designation}
              company={exp.company}
              timeline={exp.timeline}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
