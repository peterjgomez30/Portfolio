import React from "react";
import Pic from "../assets/self.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="w-full bg-[#06283D] py-12 px-4" name="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Pic} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold  py-3 text-[#47B5FF] inline border-b-4  border-[#1363DF]">
            About me
          </p>
          <p className="text-[#EAEAEA] py-3 text-2xl">
            Hey, I'm Peter Gomez and i use PJ as my nickname. I am from San
            Fernando Pampanga, Philippines, and currently seeking an entry-level
            position with a Company to use my skills in coding, troubleshooting
            complex problems, assist in the timely completion of projects, and
            to expand my knowledge in coding. I started coding last March
            2022,it became a hobby for me. i Find it really interesting and i
            know i have a lot more to learn.
          </p>
          <a
            href="Peter_John_Gomez-Junior Frontend Developer Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Peter John A. Gomez - Resume.pdf"
          >
            {" "}
            <button className="text-[#EAEAEA] border-2 px-6 py-3 my-2 w-[180px] flex items-center hover:bg-[#47B5FF] hover:border-[#47B5FF]">
              Download CV <BsFillPersonLinesFill />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
