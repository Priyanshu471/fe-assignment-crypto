import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="mt-4 bg-[#0052FE] text-white lg:h-[515px] rounded-xl px-10 py-8 lg:ml-4 text-center">
      <div className="">
        <div className="text-[22px] px-8 font-medium">
          Get Started with KoinX for FREE
        </div>
        <div className="text-sm mt-4">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Image
          src={"/frame.png"}
          className="w-52 h-48"
          width={500}
          height={500}
          alt="getting started with koinx"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-8 bg-white text-[#0F1629] rounded-xl py-3 w-[237px] text-center cursor-pointer">
          <button className="font-medium">Get Started for FREE</button>
          <div className="ml-2">
            <ArrowRight className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
