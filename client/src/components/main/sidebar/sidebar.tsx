import { BrainIcon, Home, NotepadText, Image, Video, AudioLines } from "lucide-react";

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
import SignOutButton from "../../auth/signout-button";
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Article",
    url: "#",
    icon: NotepadText,
  },
  {
    title: "Twitter",
    url: "#",
    icon: FaTwitter,
  },
  {
    title: "Videos",
    url: "#",
    icon: Video,
  },
  {
    title: "Images",
    url: "#",
    icon: Image,
  },
  {
    title: "Audio",
    url: "#",
    icon: AudioLines,
  },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarContent className="dark:bg-black bg-zinc-100">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link
              to="/"
              className="flex items-center justify-start gap-2 text-2xl font-bold dark:text-sky-500 text-sky-800"
            >
              <BrainIcon className="inline-block text-xl" />
              Brainly
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-none">
                    <Link
                      className={`dark:hover:text-sky-500 hover:text-sky-700 transition-colors duration-200 hover:border-l-4 hover:dark:border-l-sky-500 hover:border-l-sky-700 hover:bg-zinc-200 dark:hover:bg-zinc-900 ${
                        location.pathname === item.url
                          ? "border-l-4 dark:border-l-sky-500 border-l-sky-700 dark:bg-zinc-900 bg-zinc-200 dark:text-sky-500 text-sky-800"
                          : ""
                      }`}
                      to={item.url}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="flex flex-col dark:bg-black bg-zinc-100">
        <SignOutButton />
        <ThemeToggler forSidebar />
      </div>
    </Sidebar>
  );
}
