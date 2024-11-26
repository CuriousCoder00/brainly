import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarMenuItem } from "../ui/sidebar";

const SignOutButton = () => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("session");
    localStorage.removeItem("authenticated");
    window.location.href = "/auth/login";
  };
  return (
    <SidebarMenuItem className=" list-none">
      <Button
        className="w-full flex items-center justify-start gap-3 px-2"
        variant={"ghost"}
        onClick={logoutHandler}
      >
        <LogOut /> Sign Out
      </Button>
    </SidebarMenuItem>
  );
};

export default SignOutButton;
