import { useState, useRef } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import TabContent from "./TabContent";
import useOutsideAlerter from "../../hooks/useOutsiderAlerter";

const Tab1Items = [
  { key: 0, item: "Item 0" },
  { key: 1, item: "Item 1" },
  { key: 2, item: "Item 2" },
  { key: 3, item: "Item 3" },
  { key: 4, item: "Item 4" },
];

const Tab2Items = [
  { key: 0, item: "Pick 0" },
  { key: 1, item: "Pick 1" },
  { key: 2, item: "Pick 2" },
  { key: 3, item: "Pick 3" },
  { key: 4, item: "Pick 4" },
];

const Tab3Items = [
  { key: 0, item: "Check 0" },
  { key: 1, item: "Check 1" },
  { key: 2, item: "Check 2" },
  { key: 3, item: "Check 3" },
  { key: 4, item: "Check 4" },
];

const Tab4Items = [
  { key: 0, item: "Deck 0" },
  { key: 1, item: "Deck 1" },
  { key: 2, item: "Deck 2" },
  { key: 3, item: "Deck 3" },
  { key: 4, item: "Deck 4" },
];

const CustomMultiSelect = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowMenu);
  const toggleMenu = () => {
    console.log("showMenu:", showMenu);
    setShowMenu(!showMenu);
  };

  const switchTabs = (id) => {
    console.log(id);
    setSelectedTab(id);
  };

  return (
    <div className="w-full md:w-1/3 relative flex rounded-lg flex-col cursor-pointer">
      <div
        className="multiselect-box flex px-2 h-10 bg-[#495563] justify-between items-center"
        onClick={() => toggleMenu()}>
        <FaGlobeAmericas
          color="white"
          style={{ borderColor: "white" }}
          size={20}
        />
        <span className="text-white text-sm md:text-base px-2 mr-auto">
          Country, Region ...
        </span>
        <MdOutlineKeyboardArrowDown color="white" size={25} />
      </div>
      {showMenu && (
        <div
          ref={wrapperRef}
          className="flex overflow-hidden flex-col shadow-xl shadow-[#0355731a] z-10 bg-white h-80 absolute w-full">
          <div
            className="flex p-3 justify-between items-center "
            onClick={() => toggleMenu()}>
            <span className="text-[#164259] font-sans">Geographic Scope</span>
            <MdOutlineKeyboardArrowUp color="black" size={25} />
          </div>
          <div className="p-3 mb-4 w-full flex box-border justify-between  font-medium text-center text-gray-500 cursor-pointer">
            <div
              className={`${
                selectedTab === 0
                  ? "bg-[#5a6778] text-[#f6f5f2]"
                  : "bg-[#F3F5F7] text-gray-400"
              } flex-1 w-1/4 px-4 py-2 font-light text-center cursor-pointer mr-1.5 rounded-lg text-xs  md:text-sm`}
              onClick={() => switchTabs(0)}>
              Tab 1
            </div>
            <div
              className={`${
                selectedTab === 1
                  ? "bg-[#5a6778] text-[#f6f5f2]"
                  : "bg-[#F3F5F7] text-gray-400"
              } flex-1 w-1/4 px-4 py-2 font-light text-center cursor-pointer mr-1.5 rounded-lg text-xs  md:text-sm`}
              onClick={() => switchTabs(1)}>
              Tab 2
            </div>
            <div
              className={`${
                selectedTab === 2
                  ? "bg-[#5a6778] text-[#f6f5f2]"
                  : "bg-[#F3F5F7] text-gray-400"
              } flex-1 w-1/4 px-4 py-2 font-light text-gray-400 text-center cursor-pointer mr-1.5 bg-[#F3F5F7] rounded-lg text-xs  md:text-sm`}
              onClick={() => switchTabs(2)}>
              Tab 3
            </div>
            <div
              className={`${
                selectedTab === 3
                  ? "bg-[#5a6778] text-[#f6f5f2]"
                  : "bg-[#F3F5F7] text-gray-400"
              } flex-1 w-1/4 px-4 py-2 font-light text-gray-400 text-center cursor-pointer mr-1.5 bg-[#F3F5F7] rounded-lg text-xs  md:text-sm`}
              onClick={() => switchTabs(3)}>
              Tab 4
            </div>
          </div>
          <div className="dashboard-select ">
            <div className="px-3">
              <input
                type="text"
                id="searchBox"
                className="bg-[#f3f5f7] mb-4  text-[#485465] text-xs md:text-sm rounded-lg block w-full p-2.5"
                placeholder="Search..."
                required
              />
            </div>
            {selectedTab === 0 && (
              <TabContent tabData={Tab1Items} selectedTab={selectedTab} />
            )}
            {selectedTab === 1 && (
              <TabContent tabData={Tab2Items} selectedTab={selectedTab} />
            )}
            {selectedTab === 2 && (
              <TabContent tabData={Tab3Items} selectedTab={selectedTab} />
            )}
            {selectedTab === 3 && (
              <TabContent tabData={Tab4Items} selectedTab={selectedTab} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomMultiSelect;
