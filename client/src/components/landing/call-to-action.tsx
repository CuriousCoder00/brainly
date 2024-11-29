import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="border-t">
      <div className="container py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to get organized?
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Join thousands of users who are already managing their digital
            content more effectively.
          </p>
          <Link
            className="bg-black dark:bg-white text-white dark:text-black rounded-md px-6 py-2 shadow-inner hover:shadow-none hover:bg-gray-800 dark:hover:bg-gray-200 my-8 mt-4 relative overflow-hidden group"
            to="/auth/signup"
          >
            <span className="relative z-10">Start for free</span>
            <span
              className="absolute inset-0 animate-pulse-glow bg-gradient-to-r from-primary/60 to-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            ></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
