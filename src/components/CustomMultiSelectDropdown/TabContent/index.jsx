import PropTypes from "prop-types";

const TabContent = ({ tabData, selectedTab }) => {
  return (
    <div className="flex flex-col w-full overflow-y-scroll bg-white box-border max-h-44 divide-y divide-[#c8cbd1] border-t border-[#c8cbd1]">
      {tabData.map((item, index) => {
        return (
          <div
            className={`w-full p-2  ${
              index % 2 === 0 ? "bg-[#f3f5f7]" : "bg-white"
            }`}
            key={index}
            onClick={() => console.log(item, selectedTab)}>
            {item.item}
          </div>
        );
      })}
    </div>
  );
};

TabContent.propTypes = {
  tabData: PropTypes.array,
  selectedTab: PropTypes.number,
};

export default TabContent;
