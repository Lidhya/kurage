import React from "react";
import bg from "../assests/images/background.png";
import Next from "../assests/svg/nextbtn.svg";

const Dashboard = ({ data }) => {
  const { selectedNavItem, toggleLeftBar } = data;

  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="box-border px-4 bg-navColor h-[51px] flex items-center justify-between md:text-base sm:text-xs">
        <div className="flex items-center gap-2">
          <button
            className="text-white block md:hidden"
            onClick={toggleLeftBar}
          >
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
          <h2 className="text-white opacity-[60%]">{selectedNavItem}</h2>
        </div>
        <div className="flex items-center">
          <button className="mr-2 text-gray-500 borde px-4 py-1 rounded-full hover:bg-gray-800 hover:text-white">
            Preview
          </button>
          <div className="">
            <img src={Next} alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
