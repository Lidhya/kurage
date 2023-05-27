import React, { useState } from "react";
import LeftBar from "../Components/LeftBar";
import Dashboard from "../Components/Dashboard";

const Layout = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);

  const toggleLeftBar = () => {
    setIsLeftBarOpen(!isLeftBarOpen);
  };
  const changeSelectedNavItem = (item) => {
    setSelectedNavItem(item);
  };
  return (
    <div className="flex">
      <div
        className={`md:block md:w-1/5 ${!isLeftBarOpen ? "hidden" : "w-full"}`}
      >
        <LeftBar changeSelectedNavItem={changeSelectedNavItem} />
      </div>
      <div className="w-full md:w-4/5">
        <Dashboard data={{ selectedNavItem, toggleLeftBar }} />
      </div>
    </div>
  );
};

export default Layout;
