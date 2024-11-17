import { header } from "framer-motion/client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full p-3 z-50 px-12">
      <nav className="flex items-center justify-between ">
        <div className="font-bold text-2xl">Brainly</div>
        <div className="flex items-center justify-center gap-4">
          <Link href={"/"} className="">
            Home
          </Link>
          <Link href={"/auth/signup"} className="">
            Signup
          </Link>
          <Link
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-[7px] rounded-lg hover:bg-slate-200 dark:hover:bg-neutral-200 transition-colors duration-150"
            href={"/auth/login"}
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
