import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2 } from "lucide-react";
import AddContent from "./add-content-dialog";

const AppHeader = () => {
  return (
    <header className="flex w-full items-center justify-end border-b-2 shadow-md dark:bg-black bg-zinc-100">
      <nav className="flex items-center justify-end w-full p-2">
        <div className="flex items-center justify-between md:w-1/2 w-full">
          <Input
            placeholder="Search.."
            type="search"
            className="w-72 bg-white dark:bg-black"
          />
          <div className="flex items-center justify-center gap-3">
            <Button>
              <Share2 />
              Share Brain
            </Button>
            <AddContent />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
