import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { GoAlert } from "react-icons/go";

// Defines the properties for individual skip cards
interface SkipCardProps extends SkipData {
  isSelected?: boolean; // Controls visual selection state
  onSelect?: () => void; // Handles card selection click
}

// Reusable component representing a single skip option
const SkipCard: React.FC<SkipCardProps> = ({
  id,
  size,
  hire_period_days,
  price_before_vat,
  allowed_on_road,
  allows_heavy_waste,
  isSelected = false,
  onSelect,
}) => {
  // Automatically scroll to bottom when selected for better mobile visibility
  useEffect(() => {
    if (isSelected) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isSelected]);

  return (
    <section onClick={onSelect} className="flex w-full cursor-pointer">
      {/* Main card container with dynamic border coloring */}
      <div
        className={`flex flex-col gap-3 w-full transition-all duration-300 rounded-[24px] p-3 border-[1px]
        ${
          isSelected
            ? "border-[#6A71F3]"
            : "border-[#88868633] hover:border-[#6a71f379]"
        }`}
      >
        <div className="relative w-full h-full">
          <div className="absolute -z-10 w-full h-full bg-[#7a45d531] rounded-[24px]"></div>

          {/* Dynamic image selection based on skip size */}
          {[4, 6].includes(size) ? (
            <img
              src="/icons/skip-4m.webp"
              alt="Small skip"
              className="object-contain h-[150px] w-auto mx-auto rounded-[24px]"
            />
          ) : [8, 10].includes(size) ? (
            <img
              src="/icons/skip-2.webp"
              alt="Medium skip"
              className="object-contain h-[150px] w-auto mx-auto rounded-[24px]"
            />
          ) : [12, 14, 16].includes(size) ? (
            <img
              src="/icons/skip-md.webp"
              alt="Large skip"
              className="object-contain h-[150px] w-auto mx-auto rounded-[24px]"
            />
          ) : (
            <img
              src="/icons/skip-lg.avif"
              alt="Extra large skip"
              className="object-contain h-[150px] w-auto mx-auto rounded-[24px]"
            />
          )}

          <div className="absolute bottom-2 flex flex-col gap-1 w-full justify-start items-start pl-2">
            {!allows_heavy_waste && (
              <div className="flex gap-1 text-white p-1 px-2 bg-[#ba0a0a] rounded-full">
                <GoAlert />
                <p className="text-[11px]">No Heavy Waste</p>
              </div>
            )}
            {!allowed_on_road && (
              <div className="flex gap-1 text-black p-1 px-2 bg-[#fac448] rounded-full">
                <GoAlert />
                <p className="text-[11px]">Private Property Only</p>
              </div>
            )}
          </div>
        </div>

        {/* Skip details section */}
        <div className="px-2">
          <p className="text-[18px] font-bold">{size} Yard Skip</p>
          <p className="text-[#888686] text-[13px]">
            {hire_period_days} day hire period
          </p>
        </div>

        {/* Price and selection section */}
        <div className="flex w-full gap-2 justify-between items-center px-2">
          <div className="flex justify-start gap-2 group">
            <p className="text-[#888686] text-[14px]">
              <span className="text-[#6A71F3] text-[18px] font-bold">
                £ {price_before_vat}
              </span>{" "}
              per week
            </p>
          </div>

          {/* Interactive select button with hover effects */}
          <div
            className={`group flex w-[50%] justify-center items-center gap-2 border-[1px] border-[#88868633] rounded-[9px] p-2 transition-all duration-300 
            ${
              isSelected
                ? "bg-[#6A71F3]"
                : "bg-[#00000057] hover:bg-[rgba(255,255,255,0.08)]"
            }`}
          >
            <button className="text-[13px] font-bold">
              {isSelected ? "Selected" : "Select this skip"}
            </button>
            <div
              className={`transition-all duration-100 ${
                isSelected ? "-rotate-45" : "group-hover:-rotate-45"
              }`}
            >
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkipCard;
