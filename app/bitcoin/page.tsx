import Options from "@/components/options";
import Breadcrumb from "@/components/breadCrumb";
import CryptoChart from "@/components/cryptoChart";
import HeroSection from "@/components/hero";
import Performance from "@/components/performance";
import Sentiment from "@/components/sentiment";
import TrendingCoins from "@/components/trendingCoins";
import About from "@/components/about";
import Tokenomics from "@/components/tokenomics";
import Team from "@/components/team";

const Bitcoin = () => {
  return (
    <main className="h-full w-screen bg-slate-200/40">
      <Breadcrumb pageName="Bitcoin" />

      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
          <CryptoChart />
          <Options />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <HeroSection />
          <TrendingCoins />
        </div>
      </div>
    </main>
  );
};
export default Bitcoin;
