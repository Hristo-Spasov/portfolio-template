import React from "react";
import Section from "./common/Section";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Best App",
      github: "https://github.com/",
      demo: "URL to deployed project",
    },
    {
      id: 2,
      image: p2,
      title: "Best App",
      github: "https://github.com/",
      demo: "URL to deployed project",
    },
    {
      id: 3,
      image: p3,
      title: "Best App",
      github: "https://github.com/",
      demo: "URL to deployed project",
    },
    {
      id: 4,
      image: p4,
      title: "Best App",
      github: "https://github.com/",
      demo: "URL to deployed project",
    },
    {
      id: 5,
      image: p5,
      title: "Best App",
      github: "https://github.com/",
      demo: "URL to deployed project",
    },
    {
      id: 6,
      image: p6,
      title: "Best App",
      github: "https://github.com/",
      demo: "URL to deployed project",
    },
  ];

  return (
    <Section
      title="Portfolio"
      subtitle="Here are some of the projects I've worked on."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-600 rounded-2xl overflow-hidden mt-7 duration-150 hover:scale-110"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110  hover:text-rose-600"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110 hover:text-rose-600"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLink45Deg />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
