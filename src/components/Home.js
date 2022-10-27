import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="bg-[#06283D] w-full h-screen" name="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#EAEAEA] ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#47B5FF]">
          Peter John Gomez
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#1363DF]">
          A Junior Front End Developer.
        </h2>
        <p className="text-[#1363DF] py-4 max-w-[700px]">
          I'm a self-taught front-end developer specializing in building
          interactive application and responsize web applications.
        </p>
        <div className="flex justify-start">
          <button className="text-[#EAEAEA] group border-2 px-6 py-3 my-2 flex items-center mx-3 hover:bg-[#47B5FF] hover:border-[#47B5FF]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
