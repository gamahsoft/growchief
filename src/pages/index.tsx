import Image from "next/image";
import { Inter } from "next/font/google";
import StarComponent from "@growchief/components/stars/star.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <div className="relative z-50">
            <button className="mr-5 text-black p-5 max-sm:p-2 rounded-3xl mt-10 bg-[#FDCA00] text-xl max-sm:text-lg hover:bg-[#fde9a7] hover:drop-shadow-aura transition-all">
              Learn the process
            </button>
            <button className="text-black p-5 max-sm:p-2 rounded-3xl mt-10 bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all">
              Check Packages
            </button>
          </div>
          <div
            className="text-center flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-10 w-full colorb drop-shadow-aura"
            style={{
              backgroundImage:
                "radial-gradient(circle,rgba(150,102,255,.2) 0,transparent 70%),radial-gradient(circle,rgba(150,102,255,.1) 0,transparent 70%),radial-gradient(ellipse at center,hsla(0,0%,100%,.075) 0,transparent 100%)",
            }}
          >
            <a
              className="text-2xl font-bold"
              href="https://dev.to/nevodavid"
              target="_blank"
            >
              Latest articles on DEV.to
            </a>
            <div className="w-full overflow-auto">
              <table className="w-full mt-5 text-left whitespace-nowrap max-sm:text-sm">
                <thead>
                  <tr>
                    <th>
                      <div className="mr-3">Name</div>
                    </th>
                    <th>
                      <div className="mr-3">Organization</div>
                    </th>
                    <th className="text-center">
                      <div className="mr-3">Likes</div>
                    </th>
                    <th className="text-center">
                      <div className="mr-3">Views</div>
                    </th>
                    <th className="text-center">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-full">
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        🎤 Building the biggest list of useful open-source
                        libraries 🎉🥳😎
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4 text-center">
                        Novu
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        123
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        1235
                      </div>
                    </td>
                    <td>
                      <button className="text-black p-3 rounded-xl bg-[#9966FF] text-sm hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all mt-4">
                        Link
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-full">
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        🎤 Building the biggest list of useful open-source
                        libraries 🎉🥳😎
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4 text-center">
                        Novu
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        123
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        1235
                      </div>
                    </td>
                    <td>
                      <button className="text-black p-3 rounded-xl bg-[#9966FF] text-sm hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all mt-4">
                        Link
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-full">
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        🎤 Building the biggest list of useful open-source
                        libraries 🎉🥳😎
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4 text-center">
                        Novu
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        123
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        1235
                      </div>
                    </td>
                    <td>
                      <button className="text-black p-3 rounded-xl bg-[#9966FF] text-sm hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all mt-4">
                        Link
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-full">
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        🎤 Building the biggest list of useful open-source
                        libraries 🎉🥳😎
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4 text-center">
                        Novu
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        123
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        1235
                      </div>
                    </td>
                    <td>
                      <button className="text-black p-3 rounded-xl bg-[#9966FF] text-sm hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all mt-4">
                        Link
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-full">
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        🎤 Building the biggest list of useful open-source
                        libraries 🎉🥳😎
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4 text-center">
                        Novu
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        123
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        1235
                      </div>
                    </td>
                    <td>
                      <button className="text-black p-3 rounded-xl bg-[#9966FF] text-sm hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all mt-4">
                        Link
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex w-full relative z-10">
            <div className="flex flex-1">
              <div className="bg-before flex-1 text-center">
                <p
                  className="font-bold bg-clip-text text-transparent text-5xl mt-10 relative max-sm:text-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(132.93deg,#d383fc 21.78%,#cb6afb 39.25%,rgba(203,106,251,.2) 86.85%)",
                  }}
                >
                  4,658
                </p>
                <p className="font-light pl-2 mt-2 max-sm:text-sm">
                  DEV.to Followers
                </p>
              </div>
              <div className="bg-before flex-1 text-center">
                <p
                  className="font-bold bg-clip-text text-transparent text-5xl mt-10 max-sm:text-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(132.93deg,#d383fc 21.78%,#cb6afb 39.25%,rgba(203,106,251,.2) 86.85%)",
                  }}
                >
                  12,212
                </p>
                <p className="font-light pl-2 mt-2 max-sm:text-sm">
                  DEV.to Reactions
                </p>
              </div>
              <div className="bg-before flex-1 text-center">
                <p
                  className="font-bold bg-clip-text text-transparent text-5xl mt-10 max-sm:text-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(132.93deg,#d383fc 21.78%,#cb6afb 39.25%,rgba(203,106,251,.2) 86.85%)",
                  }}
                >
                  794,153
                </p>
                <p className="font-light pl-2 mt-2 max-sm:text-sm">
                  DEV.to post views
                </p>
              </div>
            </div>
          </div>
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
      <div>
        <div className="flex max-sm:flex-col mt-10">
          <div className="flex-1">
            <h1 className="text-6xl font-bold bg-clip-text mt-10 relative z-20 max-sm:text-5xl max-sm:text-center">
              The Process
            </h1>
            <ol className="space-y-6 mt-10 flex-1">
              <li className="text-xl" data-number="1.">
                We will provide you with various topics you can choose from (1-2
                days).
              </li>
              <li className="text-xl" data-number="2.">
                Working on the article (7 week).
              </li>
              <li className="text-xl" data-number="3.">
                Post your article at the specific date.
              </li>
              <li className="text-xl" data-number="4.">
                Post the article on Reddit and make it trending.
              </li>
              <li className="text-xl" data-number="5.">
                Send traffic to your library through an influencer (2 days after
                posting).
              </li>
              <li className="text-xl" data-number="6.">
                Your repository stars will skyrocket with the possibility of
                becoming trending on GitHub.
              </li>
            </ol>
          </div>
          <div className="flex items-center justify-center max-sm:mt-10">
            <img className="w-[200px] wand" src="/magic-wand.png" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex max-sm:flex-col-reverse mt-28">
          <div className="flex max-sm:justify-center items-center max-sm:mt-20 flex-1">
            <img className="w-[200px] wand" src="/library.png" />
          </div>
          <div>
            <h1 className="text-6xl font-bold bg-clip-text relative z-20 max-sm:text-5xl max-sm:text-center">
              Resources
            </h1>
            <ol className="space-y-6 mt-10 flex-1">
              <li className="text-xl" data-number="1.">
                Crowd.dev interview about the Growth Articles approach
              </li>
              <li className="text-xl" data-number="2.">
                Twitter spaces on building Growth Articles
              </li>
              <li className="text-xl" data-number="3.">
                GitHub20k a large resources to grow your GitHub library
              </li>
              <li className="text-xl" data-number="4.">
                Nevo David{"'"}s latest Growth Articles
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <h1
          className="text-center text-6xl max-sm:text-5xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(120.9deg,hsla(0,0%,100%,0) 36.54%,hsla(0,0%,100%,.5) 47.09%,hsla(0,0%,100%,0) 56.65%),linear-gradient(84.79deg,#f4d0ff 27.33%,#ba7dc5 47.55%,#dcdfff 66.08%)",
          }}
        >
          Packages
        </h1>
        <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
          <div
              className="flex-1 text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#080C23] p-10 w-full colorb"
              style={{
                backgroundImage:
                    " radial-gradient(circle,rgba(77,102,229,.2) 0,transparent 70%),radial-gradient(circle,rgba(77,102,229,.1) 0,transparent 70%),radial-gradient(ellipse at center,hsla(0,0%,100%,.075) 0,transparent 100%)",
              }}
          >
            <div className="text-[#4d66e5]">Community</div>
            <div className="text-6xl my-5 font-light">$600</div>
            <div>One of our top community members will write an article about your product</div>
            <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#4E67E5] text-xl max-sm:text-lg hover:bg-[#8a9dfc] hover:drop-shadow-aura transition-all">
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
            <div>You provide an article that will be posted on Nevo David{"'"}s feed</div>
            <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all">
              Purchase
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
            <div>You provide an article that will be posted on Nevo David{"'"}s feed</div>
            <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#F7E16F] text-xl max-sm:text-lg hover:bg-[#fdf2bb] hover:drop-shadow-aura transition-all">
              Purchase
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
    </div>
  );
}
