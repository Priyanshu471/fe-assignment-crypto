import { lorem40, lorem75 } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl font-bold text-[#0F1629]">About Bitcoin</div>
        <div className="mt-6 ">
          <div className="text-lg font-bold text-[#0B1426]">
            What is Bitcoin?
          </div>
          <div className="mt-2 pb-4 text-[#3E424A] font-medium border-b-2 border-[#C9CFDD]/40">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </div>
        </div>
        <div className="mt-2 border-b-2 border-[#C9CFDD]/40 pb-4">
          <div className="text-lg text-[#0B1426] font-bold">
            Lorem ipsum dolor sit amet
          </div>
          <div className="text-[#3E424A] font-medium mt-2">{lorem75}</div>

          <div className="mt-6 text-[#3E424A] font-medium">{lorem75}</div>
          <div className="mt-6 text-[#3E424A] font-medium">{lorem75}</div>
        </div>

        <div className=" mt-2 py-2">
          <div className="text-[#0F1629] text-2xl font-semibold">
            Already Holding Bitcoin?
          </div>
          <div className="lg:flex border-b-2 border-[#C9CFDD]/40 pb-4">
            <div className="mt-4">
              <div className="lg:w-[400px] h-[151px] bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-lg flex">
                <div className="p-3">
                  <Image
                    className="w-32 h-32 rounded-xl object-right object-cover"
                    src="https://s3-alpha-sig.figma.com/img/4a59/7cf5/e39cee97d83ba894aa0c105133924b9b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vi1JQ3hvHi19McrbQNtrRQkrzmirX8aN6JYBkBbPNYLTG7yrFI6JXcl18-tOwdUn2LdgBTpdGB-R~Ax8NfzXa2iiZ5W86NR3yoXW3Ps-nM-kH0v3RlcHrBlPaN4P3~BROWgKKlCxaGK64z8qNL5Vxr77xFJeeayGUU1Q6sEvMgT8PuD2XDwYMpM8d6TinTA41L2~oD9ra9xS25Qzn6YEGC0Ne84ECHec1XXIBZnqp7BWcO70gd8ySYKUS5llmqkqWH5ovJKu7vcMwcL1kqogBpdXTV9CbM1hgSQBz-hB08RfGro-4w5FKF8m~ujVWlzJC-eMwcZ7noWxeF4sYeTq3A__"
                    alt="calculate your profits"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="items-center p-4 flex flex-col justify-center mr-10">
                  <div className=" text-white text-xl">
                    Calculate your Profits
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center cursor-pointer">
                    Check Now
                    <ArrowRight className="ml-2 font-normal" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:ml-8">
              <div className="lg:w-[400px] h-[151px] bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-lg flex">
                <div className="p-3">
                  <Image
                    className="w-32 h-32 rounded-xl object-right object-cover"
                    src="https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPVUHiBP1sj~Wqj-jX6JXhkY69WoofuEac3xLCr1EqW17s1ORlvyTaKXFhM8CY4BX8yTKWaFYSHXTJLoOTs9NNvpAQC5PCuRD-2MmQvQveuY3At4m7UG-9vt2MwzQdn-W0oYm3B~E5El1VPZebU-D9eXWZ6ekmEIan6L~Mmf8wR3hVKjqMqLVyTb2~P04q-16~IggO2xVsP7JgP9ewUFx1gU2EsrxDSKOgX-95csf6JMSKRWvUFWtzzej4xdZ8qIRY1I7YTqHSTyEuBYyb-ylUd3u6CcjTYUgK5M6JrhUFJ9gG2qdu4c02G-kAsF8Iiv1wE8wxwf8y-D2QONK8GnBg__"
                    alt="calculate your tax liability"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="items-center p-4 flex flex-col justify-center mr-10">
                  <div className=" text-white text-xl">
                    Calculate your tax liability
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center cursor-pointer">
                    Check Now
                    <ArrowRight className="ml-2 font-normal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 text-[#3E424A] font-medium ">{lorem40}</div>
      </div>
    </div>
  );
};
export default About;
