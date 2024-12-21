import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarMenuItem } from "../ui/sidebar";
import { useToast } from "@/hooks/use-toast";
const SignOutButton = () => {
  const { toast } = useToast();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("session");
    localStorage.removeItem("authenticated");
    toast({
      title: "You have successfully logged out",
      description: "You have been logged out",
    });
    window.location.href = "/auth/login";
  };
  return (
    <SidebarMenuItem className="w-full list-none">
      <Button
        className="w-full flex items-center justify-start gap-3 px-2"
        variant={"ghost"}
        onClick={logoutHandler}
      >
        <LogOut /> Logout
      </Button>
    </SidebarMenuItem>
  );
};

export default SignOutButton;
