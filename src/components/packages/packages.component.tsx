import PurchaseComponent from "@growchief/components/purchase/purchase.component";
import { modals } from "@mantine/modals";
import { FC, useCallback } from "react";

const PackagesComponent: FC<{ type: "purchase" | "call" }> = (props) => {
  const { type } = props;
  const call = useCallback(
    (type: "Growth" | "Growth for you") => () => {
      window.location.href = process.env.CALENDAR_LINK + "?a1=" + type;
    },
    []
  );

  return (
    <div className="mt-28" id="packages">
      <h1 className="text-center text-6xl max-sm:text-5xl font-bold">
        Packages
      </h1>
      <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
        <div className="bg-grad-blue flex-1 text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#080C23] p-10 w-full colorb">
          <div className="text-[#4d66e5]">Community</div>
          <div className="text-6xl my-5 font-light">$600</div>
          <div>
            One of our top community members will write an article about your
            product
          </div>
          <button
            onClick={() =>
              modals.open({
                size: "xl",
                title: "Packages",
                classNames: {
                  body: "",
                  header:
                    "drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white",
                  content:
                    "drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white",
                },
                children: <PurchaseComponent initial="community" />,
              })
            }
            className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#4E67E5] text-xl max-sm:text-lg hover:bg-[#8a9dfc] hover:drop-shadow-aura transition-all"
          >
            Purchase
          </button>
          <ul>
            <li>An article by a community member</li>
            <li>Tap into a community member audience</li>
          </ul>
        </div>
        <div
          className="flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-10 w-full colorb"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(150,102,255,.2) 0,transparent 70%),radial-gradient(circle,rgba(150,102,255,.1) 0,transparent 70%),radial-gradient(ellipse at center,hsla(0,0%,100%,.075) 0,transparent 100%)",
          }}
        >
          <div className="text-[#9967FF]">Growth</div>
          <div className="text-6xl my-5 font-light">$1500</div>
          <div>
            You provide an article that will be posted on Nevo David{"'"}s feed
          </div>
          <button
            onClick={type === 'call' ? call('Growth') : () =>
              modals.open({
                size: "xl",
                title: "Packages",
                classNames: {
                  body: "",
                  header:
                    "drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white",
                  content:
                    "drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white",
                },
                children: <PurchaseComponent initial="growth" />,
              })
            }
            className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all"
          >
            {type === "call" ? "Schedule a meeting" : "Purchase"}
          </button>
          <ul>
            <li>Editorial by our team</li>
            <li>Reddit Promotion</li>
            <li>Influencer tweet</li>
          </ul>
        </div>
        <div
          className="flex-1 text-xl mt-14 rounded-xl border border-[#F7E16F]/25 bg-[#19170d] p-10 w-full colorb"
          style={{
            backgroundImage:
              "radial-gradient(circle,hsla(50,90%,70%,.075) 0,transparent 70%),radial-gradient(circle,hsla(50,90%,70%,.05) 0,transparent 70%),radial-gradient(ellipse at center,hsla(0,0%,100%,.075) 0,transparent 100%)",
          }}
        >
          <div className="text-[#F7E16F]">Growth for you</div>
          <div className="text-6xl my-5 font-light">$1800</div>
          <div>
            You provide an article that will be posted on Nevo David{"'"}s feed
          </div>
          <button
            onClick={type === 'call' ? call('Growth for you') : () =>
              modals.open({
                size: "xl",
                title: "Packages",
                classNames: {
                  body: "",
                  header:
                    "drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white",
                  content:
                    "drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white",
                },
                children: <PurchaseComponent initial="growthforyou" />,
              })
            }
            className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#F7E16F] text-xl max-sm:text-lg hover:bg-[#fdf2bb] hover:drop-shadow-aura transition-all"
          >
            {type === "call" ? "Schedule a meeting" : "Purchase"}
          </button>
          <ul>
            <li>We make the article</li>
            <li>Editorial by our team</li>
            <li>Reddit Promotion</li>
            <li>Influencer tweet</li>
            <li>100% done for you</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackagesComponent;
