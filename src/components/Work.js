import React from "react";
import Crypto from "../projects/crypto.png";
import Weather from "../projects/weather.png";
import TodoList from "../projects/todolist.png";
const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen  text-[#EAEAEA] bg-[#06283D]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#EAEAEA] border-[#1363DF]">
            Work
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Crypto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#EAEAEA] tracking-wider">
                Crypto Coin Search App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#47B5FF] text-[#EAEAEA] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/peterjgomez30/crypto-coin-search-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#47B5FF] text-[#EAEAEA] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#EAEAEA] tracking-wider">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#47B5FF] text-[#EAEAEA] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/peterjgomez30/weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#47B5FF] text-[#EAEAEA] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TodoList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#EAEAEA] tracking-wider">
                TodoList App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#47B5FF] text-[#EAEAEA] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/peterjgomez30/todolist-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#47B5FF] text-[#EAEAEA] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
