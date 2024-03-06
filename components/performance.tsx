import { fundamentalStats } from "@/lib/data";
import InfoIcon from "./icons/infoIcon";

const Performance = () => {
  return (
    <div className="bg-white mt-5 rounded-lg lg:p-6 p-2 h-max overflow-x-auto">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Performance</div>
        <div className="py-4 mt-2">
          <div className="flex justify-between ">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today’s Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                46,930.22
              </div>
            </div>
            <div className="w-[500px] h-2 mx-4">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
              <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">
                <svg
                  viewBox="0 0 100 100"
                  className="lg:w-3 w-2 fill-current text-black ml-7"
                >
                  <polygon points="0,100 50,0 100,100" />
                </svg>
                <span className="text-[#44475B] text-sm font-normal">
                  $47,137.83
                </span>
              </div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1 ">
                Today’s High
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,343.83
              </div>
            </div>
          </div>
          <div className="flex justify-between  mt-5">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                16,930.22{" "}
              </div>
            </div>
            <div className="w-[500px] h-2 mx-4">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W High{" "}
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,743.83{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="text-[#44475B] font-semibold text-xl mr-1">
              Fundamentals
            </div>
            <InfoIcon />
          </div>
          <div className="lg:flex mb-8">
            <div className="lg:w-1/2 lg:mr-10 mt-3">
              {fundamentalStats.slice(0, 5).map((stat) => (
                <div
                  key={stat.title}
                  className="flex justify-between py-5 border-b-2 border-[#D3E0E6]"
                >
                  <div className="text-[#768396] text-sm font-semibold">
                    {stat.title}
                  </div>
                  <div className="text-[#111827] text-sm font-semibold mr-4">
                    {stat.value}
                    {stat.date && (
                      <div className="text-xs font-normal">{stat.date}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 lg:ml-10 lg:mt-3">
              {fundamentalStats.slice(5, 8).map((stat) => (
                <div
                  key={stat.title}
                  className="flex justify-between py-5 border-b-2 border-[#D3E0E6]"
                >
                  <div className="text-[#768396] text-sm font-semibold">
                    {stat.title}
                  </div>
                  <div className="text-[#111827] text-sm font-semibold mr-4">
                    {stat.value}
                    {stat.date && (
                      <div className="text-xs font-normal">{stat.date}</div>
                    )}
                  </div>
                </div>
              ))}
              {fundamentalStats.slice(8).map((stat) => (
                <div
                  key={stat.title}
                  className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center"
                >
                  <div className="text-[#768396] text-sm font-semibold ">
                    {stat.title}
                  </div>
                  <div className="text-[#111827] text-sm font-semibold mr-4">
                    <div className="text-end">
                      {stat.value}{" "}
                      {stat.perc ? (
                        <span
                          className={`${
                            stat.perc === "-75.6"
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {stat.perc}%
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    {stat.date && (
                      <div className="text-xs font-normal">{stat.date}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Performance;
