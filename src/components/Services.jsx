import React from "react";
import Section from "./common/Section";
import commerce from "../assets/commerce.png";
import web from "../assets/web.png";
import faceRecognition from "../assets/research.png";

const services = [
  {
    id: 1,
    image: commerce,
    title: "ECommerce Website",
  },
  {
    id: 2,
    image: web,
    title: "Web development",
  },
  {
    id: 3,
    image: faceRecognition,
    title: "Personal websites",
  },
];

const Services = () => {
  return (
    <Section
      title="Services 👩🏻‍💻"
      subtitle="Here are some the services I provide as freelancer"
    >
      <div className="grid gap-10 lg:grid-cols-2 m-5">
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5  shadow-lg shadow-gray-500 dark:shadow-gray-700 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:w-44 md:h-44 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
