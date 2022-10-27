import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/icons8-react-240.png";
import Tailwind from "../assets/tailwind.png";
import Wordpress from "../assets/icons8-wordpress-240.png";
import GitHub from "../assets/icons8-github-240.png";
import BootstrapImg from "../assets/icons8-bootstrap-240.png";
const Skills = () => {
  return (
    <div name="skills" className="bg-[#06283D] text-[#EAEAEA] w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4   flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-[#47B5FF] font-bold inline border-b-4 border-[#1363DF] ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="html icon" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="html icon" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="html icon" />
            <p>ReactJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="html icon" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Wordpress} alt="html icon" />
            <p>Wordpress</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="html icon" />
            <p>GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={BootstrapImg} alt="html icon" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
