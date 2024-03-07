import { lorem100 } from "@/lib/data";

const Tokenomics = () => {
  return (
    <div className="bg-white h-max rounded-lg my-5 p-6">
      <div className="text-[#0F1629] text-2xl font-semibold">Tokenomics</div>
      <div className="my-6">
        <div className="text-[rgb(29,29,29)] text-xl font-semibold">
          Initial Distribution
        </div>
        <div className="py-4 flex ">
          <PieChart />
          <div className="flex flex-col justify-center ml-8">
            <Heading fill="#0082FF" name="Crowdsale investors: 80%" />
            <Heading fill="#FAA002" name="Foundation: 20%" />
          </div>
        </div>
        <div className="text-[#3E424A] text-[16px] py-2">{lorem100}</div>
      </div>
    </div>
  );
};

export default Tokenomics;

// Helper Components
const PieChart = () => {
  return (
    <div>
      <svg
        width="179"
        height="180"
        viewBox="0 0 179 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="89.5"
          cy="89.7969"
          r="74.5"
          stroke="#0082FF"
          stroke-width="30"
        />
        <mask id="path-2-inside-1_1_922" fill="white">
          <path d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z" />
        </mask>
        <path
          d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z"
          stroke="#FAA002"
          stroke-width="60"
          mask="url(#path-2-inside-1_1_922)"
        />
        <circle cx="89.5" cy="89.5" r="59.5" fill="white" />
        <circle cx="89.5" cy="89.5" r="59.5" stroke="#0082FF" />
      </svg>
    </div>
  );
};

const Heading = ({ fill, name }: { fill: string; name: string }) => {
  return (
    <div className="flex items-center pt-2">
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.796875" width="12" height="12" rx="6" fill={fill} />
      </svg>
      <div className="text-[#202020] text-lg font-normal ml-4">{name}</div>
    </div>
  );
};
