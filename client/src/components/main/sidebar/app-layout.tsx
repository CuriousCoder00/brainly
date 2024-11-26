import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/main/sidebar/sidebar";
import AppHeader from "../header/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col items-start justify-start w-full relative">
        <SidebarTrigger className="absolute top-2 left-2" />
        <AppHeader />
        <div className="flex items-start justify-start w-full h-full p-4">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
