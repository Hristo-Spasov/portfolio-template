import React from "react";
import Section from "./common/Section";
import { BsLinkedin } from "react-icons/bs";
import contact from "../assets/mobile.png";

const Contact = () => {
  const social = [
    {
      id: 1,
      link: "https://linkedin.com",
      icon: <BsLinkedin />,
    },
  ];

  return (
    <Section title="Contact" subtitle="Get in touch with me.">
      <div className="flex flex-col items-center justify-center gap-8 text-center mt-2">
        <div>
          <img
            src={contact}
            alt="contact info"
            className="w-32 h-32 justify-center"
          />
        </div>
        <div>
          <p className=" max-w-xs md:max-w-lg font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            voluptatibus fugiat asperiores et consequatur, cumque odit inventore
            ea! Laudantium, totam.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {social.map(({ id, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 hover:text-rose-600"
            >
              {icon}
            </a>
          ))}
        </div>
        {/* bottom form */}
        <div className="p-8 text-left w-full">
          <form
            action="https://getform.io/f/ceb20eb9-33b2-45ef-83ae-b51e2d2914f2"
            method="POST"
          >
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight ">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className=" border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight ">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  className=" border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight ">
                  message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
