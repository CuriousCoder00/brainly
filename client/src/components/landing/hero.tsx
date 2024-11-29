import useSession from "@/hooks/use-session";
import { Link } from "react-router-dom";

const Hero = () => {
  const { session } = useSession();
  return (
    <div className="h-[70dvh] w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center pt-28">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center gap-5 justify-center text-center dark:text-white">
        <h1 className="sm:text-5xl text-3xl font-bold tracking-tight lg:text-6xl lg:w-[900px] md:text-5xl relative">
          <span className="relative z-10">
            A second brain to manage your important links and docs
          </span>
          <span
            className="absolute inset-0 animate-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl"
            aria-hidden="true"
          ></span>
        </h1>

        <p className="text-xl dark:text-zinc-300">
          Store organize and access your important content with ease
        </p>
        {session ? (
          <Link
            className="bg-black dark:bg-white text-white dark:text-black rounded-md px-6 py-2 shadow-inner hover:shadow-none hover:bg-gray-800 dark:hover:bg-gray-200 my-8 mt-4 relative overflow-hidden group"
            to="/app"
          >
            <span className="relative z-10">Go to app</span>
            <span
              className="absolute inset-0 animate-pulse-glow bg-gradient-to-r from-primary/60 to-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            ></span>
          </Link>
        ) : (
          <Link
            className="bg-black dark:bg-white text-white dark:text-black rounded-md px-6 py-2 shadow-inner hover:shadow-none hover:bg-gray-800 dark:hover:bg-gray-200 my-8 mt-4 relative overflow-hidden group"
            to="/auth/signup"
          >
            <span className="relative z-10">Get Started</span>
            <span
              className="absolute inset-0 animate-pulse-glow bg-gradient-to-r from-primary/60 to-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            ></span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
