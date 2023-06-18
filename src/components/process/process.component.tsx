const ProcessComponent = () => {
  return (
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
  );
};

export default ProcessComponent;
