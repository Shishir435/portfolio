import Image from "next/image";

const technologies = [
  {
    name: "JavaScript",
    icon: "/javascript.svg",
  },
  {
    name: "Typescript",
    icon: "/typescript.svg",
  },
  {
    name: "React JS",
    icon: "/react.svg",
  },

  {
    name: "Nextjs",
    icon: "/next.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/redux.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.svg",
  },
  {
    name: "Express",
    icon: "/express.svg",
  },
  {
    name: "Node JS",
    icon: "/nodejs.svg",
  },
  {
    name: "MongoDB",
    icon: "/mongodb.svg",
  },
  {
    name: "git",
    icon: "/git.svg",
  },
  {
    name: "github",
    icon: "/github.svg",
  },
];

const TechCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <>
      <div className="flex justify-evenly items-center flex-col bg-tertiary rounded-[20px] p-5  h-[100px] w-[100px]  ">
        <Image
          src={icon}
          width={60}
          height={60}
          alt={`${name}_logo`}
          loading="lazy"
          className="  object-contain h-[60px] w-[60px]"
        />
        <h3 className="text-white text-[10px] font-bold text-center">{name}</h3>
      </div>
    </>
  );
};
const Tech = () => {
  return (
    <section id="tech" className="my-20">
      <div className="flex flex-row flex-wrap justify-center  ">
        {technologies.map((technology) => (
          <div className="w-20 h-20 m-5" key={technology.name}>
            <TechCard name={technology.name} icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
