import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#06283D] w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/6a5e6436-2d7c-4b42-843e-5829a2720cd6"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#1363DF] text-[#EAEAEA]">
            Contact
          </p>
          <p className="text-[#EAEAEA] py-4">
            Submit the form below or send me an email at - peterjgomez@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="bg-[#ccd6f6] my-4 p-2 "
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeHolder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#47B5FF] hover:border-[#47B5FF] px-4 py-3 my-8 mx-auto flex items-center">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default Contact;
