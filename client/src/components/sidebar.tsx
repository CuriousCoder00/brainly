import { Calendar, Home, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import ThemeToggler from "@/lib/theme-toggle";
import { FaTwitter } from "react-icons/fa";
import SignOutButton from "./auth/signout-button";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Twitter",
    url: "#",
    icon: FaTwitter,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-bold">
            Brainly
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SignOutButton />
      <ThemeToggler forSidebar />
    </Sidebar>
  );
}
