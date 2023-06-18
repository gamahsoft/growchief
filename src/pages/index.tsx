import Image from "next/image";
import { Inter } from "next/font/google";
import StarComponent from "@growchief/components/stars/star.component";
import FaqComponent from "@growchief/components/faq/faq.component";
import DevComponent from "@growchief/components/dev/dev.component";
import ProcessComponent from "@growchief/components/process/process.component";
import ResourcesComponent from "@growchief/components/resources/resources.component";
import PackagesComponent from "@growchief/components/packages/packages.component";
import { loadDevToAnalytics } from "@growchief/helpers/dev.to";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { dev: any }) {
  const { dev } = props;
  return (
    <div className="mx-auto max-w-[1492px] px-10 flex flex-col w-full">
      <div className="flex flex-col min-h-[100vh] w-full py-4 pb-16">
        <div className="flex">
          <p className="text-2xl flex-1">GrowChief</p>
          <StarComponent />
        </div>
        <div className="flex flex-1 flex-col justify-center items-center mt-20">
          <div className="flex">
            <div>
              <img
                src="/star-icon.svg"
                className="w-[50px] h-[50px] mr-5 max-sm:hidden"
              />
            </div>
            <h1
              className="text-center text-6xl max-sm:text-5xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(120.9deg,hsla(0,0%,100%,0) 36.54%,hsla(0,0%,100%,.5) 47.09%,hsla(0,0%,100%,0) 56.65%),linear-gradient(84.79deg,#f4d0ff 27.33%,#ba7dc5 47.55%,#dcdfff 66.08%)",
              }}
            >
              Grow your open-source library
            </h1>
            <div>
              <img
                src="/star-icon.svg"
                className="w-[50px] h-[50px] ml-5 max-sm:hidden"
              />
            </div>
          </div>
          <h2 className="text-center mt-10 text-2xl max-sm:text-xl">
            Buy articles that will make you trending on GitHub
          </h2>
          <div className="relative z-50 flex">
            <button className="mr-5 text-black p-5 max-sm:p-2 rounded-3xl mt-10 bg-[#FDCA00] text-xl max-sm:text-lg hover:bg-[#fde9a7] hover:drop-shadow-aura transition-all">
              Learn the process
            </button>
            <button className="text-black p-5 max-sm:p-2 rounded-3xl mt-10 bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all">
              Check Packages
            </button>
          </div>
          <DevComponent dev={dev} />
        </div>
        <div className="pointer-events-none absolute left-0 top-0 w-full h-[1079px] overflow-hidden">
          <div
            className="pointer-events-none -z-20 absolute -top-[348px] left-[50%] -translate-x-[50%] w-[1079px] h-[1079px] opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle,#96f 0,rgba(14,10,15,0) 70%)",
            }}
          />
        </div>
      </div>
      <ProcessComponent />
      <ResourcesComponent />
      <PackagesComponent />
      <div className="mt-28">
        <h1 className="text-center text-6xl max-sm:text-5xl font-bold">FAQ</h1>
        <FaqComponent />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const dev = await loadDevToAnalytics();
  return {
    props: {
      dev,
    },
  };
};
