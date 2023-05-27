import React, { useEffect, useState } from "react";
import title from "../assests/svg/Add Details.svg";
import arrow from "../assests/images/arrow.png";
import fourDotBlack from "../assests/svg/4dot-black.svg";
import fourDotGray from "../assests/svg/4dot-gray.svg";
import dropdown from "../assests/svg/dropdown.svg";

const LeftBar = ({ changeSelectedNavItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    changeSelectedNavItem(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const toggleDropdown = (event) => {
    setText(event.target.innerText);
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (event) => {
    let newText = text.split("/");
    setText(newText[0] + " / " + event.target.innerText);
  };

  const handleclick = (event) => {
    setText(event.target.innerText);
  };

  return (
    <div className="h-screen w-full bg-navColor pr-1">
      <div className="box-border h-[51px] bg-navColor opacity-[100%] px-3 flex items-center justify-between  sm:text-xs">
        <h2 className="text-white flex items-center gap-2">
          <img src={arrow} alt="title" />
          <img src={title} alt="title" />
        </h2>
        <div className="justify-center items-center hidden md:flex">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start w-full text-white">
        <button
          className="px-4 w-full text-start flex items-center justify-between gap-2 text-black bg-gradient-to-br from-teal-400 to-cyan-400 hover:bg-white  h-10"
          onClick={toggleDropdown}
        >
          <div className="flex items-center gap-2">
            <img src={fourDotBlack} alt="fourDot" />
            <span>Mobile Apps (6)</span>
          </div>
          <img src={dropdown} alt="dropdown" />
        </button>
        {isOpen && (
          <div className="w-full">
            <button
              className="flex items-center gap-2 px-4 w-full text-start opacity-[60%] text-white bg-black hover:bg-white hover:text-black  h-[36.5px]"
              onClick={handleDropdownClick}
            >
              <img src={fourDotGray} alt="fourDot" />
              <span>Tech Product Design And Develop…</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 w-full text-start opacity-[60%] text-white bg-black hover:bg-white hover:text-black  h-[36.5px]"
              onClick={handleDropdownClick}
            >
              <img src={fourDotGray} alt="fourDot" />
              <span>Consultation</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 w-full text-start opacity-[60%] text-white bg-black hover:bg-white hover:text-black  h-[36.5px]"
              onClick={handleDropdownClick}
            >
              <img src={fourDotGray} alt="fourDot" />
              <span>IOS</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 w-full text-start opacity-[60%] text-white bg-black hover:bg-white hover:text-black  h-[36.5px]"
              onClick={handleDropdownClick}
            >
              <img src={fourDotGray} alt="fourDot" />
              <span>Android</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 w-full text-start opacity-[60%] text-white bg-black hover:bg-white hover:text-black  h-[36.5px]"
              onClick={handleDropdownClick}
            >
              <img src={fourDotGray} alt="fourDot" />
              <span>React</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 w-full text-start opacity-[60%] text-white bg-black hover:bg-white hover:text-black  h-[36.5px]"
              onClick={handleDropdownClick}
            >
              <img src={fourDotGray} alt="fourDot" />
              <span>Flutter</span>
            </button>
          </div>
        )}

        <button
          className="px-4 w-full text-start flex gap-2 items-center bg-opacity-[7%] bg-white opacity-[60%] text-white hover:bg-white hover:text-black  h-10"
          onClick={handleclick}
        >
          <img src={fourDotGray} alt="fourDot" />
          <span>Digital Branding & Mar… (5)</span>
        </button>
        <button
          className="px-4 w-full text-start flex gap-2 items-center bg-opacity-[7%] bg-white opacity-[60%] text-white hover:bg-white  hover:text-black  h-10"
          onClick={handleclick}
        >
          <img src={fourDotGray} alt="fourDot" />
          <span>Digital Branding & Mar… (5)</span>
        </button>
        <button
          className="px-4 w-full text-start flex gap-2 items-center bg-opacity-[7%] bg-white opacity-[60%] text-white  hover:bg-white hover:text-black  h-10"
          onClick={handleclick}
        >
          <img src={fourDotGray} alt="fourDot" />
          <span>Enterprise Solutions (6)</span>
        </button>
        <button
          className="px-4 w-full text-start flex gap-2 items-center bg-opacity-[7%] bg-white opacity-[60%] text-white hover:bg-white hover:text-black  h-10"
          onClick={handleclick}
        >
          <img src={fourDotGray} alt="fourDot" />
          <span>Videos (6)</span>
        </button>
      </div>
    </div>
  );
};

export default LeftBar;