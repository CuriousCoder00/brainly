import { Button } from "@/components/ui/button";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggler = ({ forSidebar }: { forSidebar?: boolean }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  if (forSidebar) {
    return (
      <Button className="w-full flex items-center justify-start pl-2" variant={"ghost"} onClick={toggleTheme}>
        {theme === "light" ? (
          <SidebarMenuItem className=" list-none">
            <div className="flex items-center justify-start gap-3">
              <FaMoon /> Dark Mode
            </div>
          </SidebarMenuItem>
        ) : (
          <SidebarMenuItem className=" list-none">
            <div className="flex items-center justify-start gap-3">
              <FaSun /> Light Mode
            </div>
          </SidebarMenuItem>
        )}
      </Button>
    );
  }
  return (
    <Button
      className="bg-transparent"
      variant={"outline"}
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ThemeToggler;
