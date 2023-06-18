import { FC } from "react";
import numeral from "numeral";

const DevComponent: FC<{
  dev: {
    views: number;
    likes: number;
    followers: number;
    list: Array<{
      title: string;
      organization: string;
      views: number;
      likes: number;
      url: string;
    }>;
  };
}> = (props) => {
  const {
    dev: { views, likes, followers, list },
  } = props;
  return (
    <>
      <div
        className="text-center flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] w-full colorb drop-shadow-aura relative overflow-x-hidden overflow-y-auto container"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(150,102,255,.2) 0,transparent 70%),radial-gradient(circle,rgba(150,102,255,.1) 0,transparent 70%),radial-gradient(ellipse at center,hsla(0,0%,100%,.075) 0,transparent 100%)",
        }}
      >
        <div className="absolute p-10 left-0 top-0 w-full h-full">
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
                    <div className="mr-3">Views</div>
                  </th>
                  <th className="text-center">
                    <div className="mr-3">Likes</div>
                  </th>
                  <th className="text-center">Link</th>
                </tr>
              </thead>
              <tbody>
                {list.map((current) => (
                  <tr key={current.title}>
                    <td className="w-full">
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        {current.title}
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4 text-center">
                        {current.organization}
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        {numeral(current.views).format()}
                      </div>
                    </td>
                    <td>
                      <div className="bg-black/30 p-3 rounded-xl mr-3 mt-4">
                        {numeral(current.likes).format()}
                      </div>
                    </td>
                    <td>
                      <a
                        target="_blank"
                        href={current.url}
                        className="text-black p-3 rounded-xl bg-[#9966FF] text-sm hover:bg-[#BB99FF] hover:drop-shadow-aura transition-all mt-4"
                      >
                        Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              {numeral(followers).format()}
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
              {numeral(likes).format()}
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
              {numeral(views).format()}
            </p>
            <p className="font-light pl-2 mt-2 max-sm:text-sm">
              DEV.to post views
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevComponent;
