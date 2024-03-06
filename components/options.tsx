"use client";

import { useState } from "react";

const options = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];
const Options = () => {
  const [isSelected, setIsSelected] = useState<string>("Overview");
  return (
    <div>
      <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
        {/* <div className="text-[#0141CF] border-[#0052FE] border-b-4 pb-4">
          Overview
        </div> */}
        {options.map((option) => (
          <div
            key={option}
            className={`cursor-pointer ${
              isSelected === option
                ? `text-[#0141CF] border-[#0052FE] border-b-4 pb-2`
                : `hover:text-[#0141CF] `
            }`}
            onClick={() => setIsSelected(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <hr className="mb-4 -mt-4"></hr>
    </div>
  );
};

export default Options;
