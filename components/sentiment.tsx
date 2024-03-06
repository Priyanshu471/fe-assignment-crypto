import { ChevronRight } from "lucide-react";
import NewsIcon from "./icons/news";
import GrowthIcon from "./icons/growth";
import InfoIcon from "./icons/infoIcon";
const cards = ["news", "growth"];
const sentiments = [
  {
    title: "Buy",
    value: "76%",
    color: "bg-[#00B386]",
    width: "md:w-96",
  },
  {
    title: "Hold",
    value: "8%",
    color: "bg-[#C7C8CE]",
    width: "md:w-8",
  },
  {
    title: "Sell",
    value: "16%",
    color: "bg-[#F7324C]",
    width: "md:w-16",
  },
];

const Sentiment = () => {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-3">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Sentiment</div>
        <Heading heading="Key Events" />
        <div className="lg:flex lg:gap-x-8 md:gap-x-4 gap-y-2 mb-4">
          {cards.map((card) => (
            <Card key={card} card={card} />
          ))}
        </div>

        <div className="mb-6">
          <Heading heading="Sentiment Analysis" />

          <div className="flex mt-2">
            <div className="text-4xl bg-[#EBF9F4] text-[#0FBA83] lg:px-10 lg:py-12 px-8 py-6 rounded-full items-center flex">
              76<div className="text-lg ">%</div>
            </div>

            <div className="lg:px-10 px-2 mt-2">
              {sentiments.map((sentiment) => (
                <div key={sentiment.title} className="flex p-2 items-center">
                  <div className="text-[#7C7E8C] text-[15px] mr-9">
                    {sentiment.title}
                  </div>
                  <div className={`${sentiment.width} w-20 h-2 `}>
                    <div className={`${sentiment.color} h-full rounded`}></div>
                  </div>
                  <div className="ml-3 text-[#7C7E8C] text-sm">
                    {sentiment.value}
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

export default Sentiment;

// Helper components
const Heading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex items-center py-2 mt-2">
      <div className="text-[#44475B] font-semibold text-xl mr-1">{heading}</div>
      <InfoIcon />
    </div>
  );
};

const Card = ({ card }: { card: string }) => {
  return (
    <div
      className={`lg:w-2/3 lg:h-[234px] h-[200px] rounded-xl my-1 ${
        card === "news" ? "bg-[#E8F4FD]" : "bg-[#EBF9F4]"
      } `}
    >
      <div className="p-4 flex">
        <div
          className={` w-11 h-11 rounded-full justify-center flex items-center ${
            card === "news" ? "bg-[#0082FF]" : "bg-[#0FBA83]"
          }`}
        >
          {card === "news" ? <NewsIcon /> : <GrowthIcon />}
        </div>
        <div className="ml-2 w-[calc(100%-3rem)]">
          <div className="lg:text-sm text-xs font-medium text-[#191C1F] whitespace-normal">
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
            mattis enim tincidunt.
          </div>
          <div className="lg:text-base text-xs font-normal text-[#3E5765] whitespace-normal mt-2 over">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.
          </div>
        </div>
      </div>
    </div>
  );
};
