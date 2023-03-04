import React from "react";
import Section from "./common/Section";
import avatar from "../assets/Hero.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: avatar,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta id totam tempore voluptatem eius dolore sequi",
    },
    {
      id: 2,
      image: avatar,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta id totam tempore voluptatem eius dolore sequi",
    },
    {
      id: 3,
      image: avatar,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta id totam tempore voluptatem eius dolore sequi",
    },
  ];

  return (
    <Section
      title="Testimonials"
      subtitle="This is what my clients have to say about me. I accept clients from all around the world"
    >
      <div className="max-w-xl flex flex-col gap-6">
        {testimonials.map(({ id, image, name, comment }) => (
          <div
            key={id}
            className="flex p-4 justify-center rounded-xl items-center shadow-md dark:shadow-gray-600"
          >
            <div className="w-1/3">
              <img
                src={image}
                alt={name}
                className=" w-20 h-20 object-cover object-top pt-2"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2 ">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-xm font-extralight"> {comment} </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
