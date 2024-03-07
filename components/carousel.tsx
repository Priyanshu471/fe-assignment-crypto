"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Carousel = ({ cryptoData, id }: { id: number; cryptoData: [] }) => {
  const slideLeft = () => {
    var slider = document.getElementById(`slider${id}`);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById(`slider${id}`);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <div className="my-2 relative">
      <ChevronLeft
        onClick={slideLeft}
        size={40}
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full border border-gray-300 p-1 bg-white shadow-md"
      />
      <div
        id={`slider${id}`}
        className="flex gap-2 w-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth"
      >
        {cryptoData.map((crypto: { item: any }) => (
          <Card key={crypto.item} crypto={crypto.item} />
        ))}
      </div>
      <ChevronRight
        onClick={slideRight}
        size={40}
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full border border-gray-300 p-1 bg-white shadow-md"
      />
    </div>
  );
};

export default Carousel;

const Card = ({ crypto }: any) => {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-2xl border-gray-200 border min-w-80 max-h-48 overflow-y-hidden">
      <div className="flex items-center gap-2">
        <Image
          src={crypto.small}
          alt=""
          className="rounded-full w-[35px]"
          width={50}
          height={50}
        />
        <p className="font-normal text-sm">{crypto.symbol}</p>
        <p
          className={`rounded p-1 text-xs ${
            parseFloat(crypto.data.price_change_percentage_24h.usd) < 0
              ? "bg-red-100 text-red-400"
              : "bg-green-100 text-green-400"
          }`}
        >
          {parseFloat(crypto.data.price_change_percentage_24h.usd).toFixed(2)}%
        </p>
      </div>
      <h1 className="text-lg font-medium">{crypto.data.price.slice(0, 10)}</h1>
      <Image
        src={crypto.data.sparkline}
        alt=""
        className="w-[70%] m-auto"
        width={50}
        height={50}
      />
    </div>
  );
};
