import {FC} from "react";

const ProcessComponent: FC<{title: string, process: string[]}> = (props) => {
  const {title, process} = props;
  return (
    <div id="process">
      <div className="flex max-sm:flex-col mt-10">
        <div className="flex-1">
          <h1 className="text-6xl font-bold bg-clip-text mt-10 relative z-20 max-sm:text-5xl max-sm:text-center">
            {title}
          </h1>
          <ol className="space-y-6 mt-10 flex-1">
            {process.map((p, index) => (
              <li key={p} className="text-xl" data-number={`${index + 1}.`}>
                {p}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-1 items-center justify-center max-sm:mt-10">
          <img className="w-[200px] wand" src="/magic-wand.png" />
        </div>
      </div>
    </div>
  );
};

export default ProcessComponent;
