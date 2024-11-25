import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full p-3 z-50 px-12">
      <nav className="flex items-center justify-between ">
        <Link to={"/"} className="font-bold text-2xl">
          Brainly
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Link to={"/"} className="">
            Home
          </Link>
          <Link to={"/game"} className="">
            Play
          </Link>
          <Link to={"/auth/signup"} className="">
            Signup
          </Link>
          <Link
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-[7px] rounded-lg hover:bg-slate-200 dark:hover:bg-neutral-200 transition-colors duration-150"
            to={"/auth/login"}
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
