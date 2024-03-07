"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./carousel";

const Footer = () => {
  const [trendingCryptoData, setTrendingCryptoData] = useState();

  useEffect(() => {
    const fetchTrendingCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        // console.log(response.data.coins || []);
        setTrendingCryptoData(response.data.coins || []);
      } catch (error) {
        console.error("Error fetching trending crypto data:", error);
      }
    };
    fetchTrendingCryptoData();
  }, []);

  return (
    <div className="p-12 bg-[#fff] mt-10">
      <h1 className="text-[26px] font-semibold my-4">You May Also Like</h1>
      <Carousel id={1} cryptoData={trendingCryptoData || []}></Carousel>
      <h1 className="text-[26px] font-semibold my-4 mt-8">Trending Coins</h1>
      <Carousel id={2} cryptoData={trendingCryptoData || []}></Carousel>
    </div>
  );
};
export default Footer;
