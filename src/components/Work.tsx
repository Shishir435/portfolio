import Image, { StaticImageData } from "next/image";
import {
  google,
  coinMinder,
  todo,
  verbVoyage,
  weather,
  youtube,
} from "../assets";
import Link from "next/link";
import { v4 as uuid } from "uuid";

const projects = [
  {
    name: "VerbVoyage",
    img: verbVoyage,
    description:
      "A Next.js app with post management, profile visibility, tagging, search, secure authentication (OAuth, NextAuth), MongoDB.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "nextAuth",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Shishir435/Verbvoyage",
    live_demo_link: "https://verbvoyage.vercel.app/",
  },
  {
    name: "CoinMinder",
    img: coinMinder,
    description:
      "Expense management app with MongoDB, React, Node, and Express.Efficient filtering by date. User-friendly interface for financial analysis.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Shishir435/coinMinder",
    live_demo_link: "https://wandering-erin-nightingale.cyclic.app/login",
  },
  {
    name: "YouTubeClone",
    img: youtube,
    description:
      "Api-based clone application for searching and watching YouTube videos. It also has a sidebar with various video categories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "materialUi",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Shishir435/youtube-clone",
    live_demo_link: "https://cloneyoutubeap.netlify.app/",
  },
  {
    name: "GoogleSearchClone",
    img: google,
    description:
      "A fully responsive search engine like Google chrome tab allows users to search for anything.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "googleCustomApi",
        color: "green-text-gradient",
      },
      {
        name: "materialUi",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Shishir435/Google-Clone",
    live_demo_link: "https://googlezclone.netlify.app/",
  },
  {
    name: "WeatherApp",
    img: weather,
    description:
      "A web application allows users to search the weather of any city worldwide and see the forecast for the next seven days.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "openWeatherApi",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Shishir435/Weather-app/",
    live_demo_link: "https://shishir-weather-app.netlify.app/",
  },
  {
    name: "TodoList",
    img: todo,
    description:
      "A todo list app that allows users to add and delete items. You can also create multiple lists and see all indexes in the all lists section.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Shishir435/todo",
    live_demo_link: "https://listsv1.onrender.com/",
  },
];

interface Tag {
  name: string;
  color: string;
}
interface ProjectCard {
  name: string;
  img: StaticImageData;
  description: string;
  tags: Tag[];
  source_code_link: string;
  live_demo_link: string;
}
const ProjectCard = ({
  name,
  img,
  description,
  tags,
  source_code_link,
  live_demo_link,
}: ProjectCard) => {
  return (
    <div className="bg-gradient-to-r from-[#c0d8f2] to-[#ddeafa] p-1 rounded-xl ">
      <div className="relative">
        <Image
          src={img}
          alt={name}
          width="300"
          height="250"
          loading="lazy"
          className="w-full object-fill rounded-xl "
        />
        <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <Link href={source_code_link} target="_blank">
              <Image
                src="/github.svg"
                alt="github_link"
                height="40"
                width="40"
                className="w-[40px] h-[40px] object-contain"
              />
            </Link>
          </div>
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <Link href={live_demo_link} target="_blank">
              <Image
                src="/website.svg"
                alt="website_link"
                height={40}
                width={40}
                className="w-[40px] h-[40px] object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5 px-4">
        <h3 className="text-[#0056d2] font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-[14px]">{description}</p>
      </div>
      <div className="my-4 px-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={uuid()} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

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
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
        </div>
        
      </section>
    </>
  );
};

export default Work;
