import { FC, ReactElement } from "react";

const ResourcesComponent: FC<{ resources: ReactElement[], title: string }> = (props) => {
  const { title, resources } = props;
  return (
    <div>
      <div className="flex max-sm:flex-col-reverse mt-28">
        <div className="flex max-sm:justify-center items-center max-sm:mt-20 flex-1">
          <img className="w-[200px] wand" src="/library.png" />
        </div>
        <div>
          <h1 className="text-6xl font-bold bg-clip-text relative z-20 max-sm:text-5xl max-sm:text-center">
            {title}
          </h1>
          <ol className="space-y-6 mt-10 flex-1">
            {resources.map((current, index) => (
              <li
                key={String(index)}
                className="text-xl"
                data-number={`${index + 1}.`}
              >
                {current}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ResourcesComponent;
