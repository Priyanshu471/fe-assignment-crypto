"use client";

import { options } from "@/lib/data";
import { useState } from "react";

const Options = () => {
  const [isSelected, setIsSelected] = useState<string>("Overview");
  return (
    <>
      <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 lg:overflow-auto overflow-x-scroll">
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
      <hr className="mb-4 -mt-4" />
    </>
  );
};

export default Options;
