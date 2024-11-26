import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/main/sidebar/sidebar";
import AppHeader from "../header/header";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col items-start justify-start w-full relative">
        <SidebarTrigger className="absolute top-2 left-2" />
        <AppHeader />
        <ScrollArea className="flex items-start justify-start max-h-[92dvh] h-full p-4">
          {children}
        </ScrollArea>
      </main>
    </SidebarProvider>
  );
}
