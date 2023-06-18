const ResourcesComponent = () => {
  return (
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
  );
};

export default ResourcesComponent;
