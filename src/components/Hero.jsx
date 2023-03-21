import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import avatar from "../assets/Hero.png"; // Make your own 3D avatar at https://readyplayer.me/

const Hero = () => {
  const social = [
    {
      id: 1,
      link: "https://linkedin.com",
      icon: <BsLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com",
      icon: <BsGithub />,
    },
  ];

  //*  Hide arrow */
  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");
    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl  text-rose-600 uppercase font-bold">Name here</h2>
      <h3 className="py-3 text-2xl">Front-End Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello, welcome to my website. I'm a web developer.
      </p>

      {/* social icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {social.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>
      {/* Avatar Image and resume */}
      <div>
        <img
          src={avatar}
          alt="avatar"
          className=" w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pb-3"
        />
        <a
          href="PDF path here"
          download={true}
          className="flex items-center justify-center mt-5 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>
      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <MdKeyboardDoubleArrowDown className=" text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
