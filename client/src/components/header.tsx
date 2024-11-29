import useSession from "@/hooks/use-session";
import ThemeToggler from "@/lib/theme-toggle";
import { Link } from "react-router-dom";

const Header = () => {
  const { session } = useSession();
  return (
    <header className="fixed top-0 w-full p-3 z-50 sm:px-12 dark:bg-black dark:shadow-zinc-900 dark:text-white bg-slate-100 text-slate-800 shadow-md">
      <nav className="flex items-center justify-between ">
        <Link to={"/"} className="font-bold text-2xl">
          Brainly
        </Link>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <ThemeToggler />
            {!session ? (
              <Link
                className="px-4 py-[7px] rounded-lg text-slate-100 bg-black dark:bg-white dark:text-zinc-950 shadow-inner shadow-slate-200 hover:shadow-md hover:shadow-slate-700 dark:shadow-slate-600 hover:dark:shadow-md hover:dark:border-slate-600 dark:hover:shadow-slate-300 transition-all duration-150"
                to={"/auth/login"}
              >
                Login
              </Link>
            ) : (
              <Link
                className="px-4 py-[7px] rounded-lg text-slate-100 bg-black dark:bg-white dark:text-zinc-950 shadow-inner shadow-slate-200 hover:shadow-md hover:shadow-slate-700 dark:shadow-slate-600 hover:dark:shadow-md hover:dark:border-slate-600 dark:hover:shadow-slate-300 transition-all duration-150"
                to={"/app"}
              >
                Go to app
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
