import { Input } from "@/components/ui/input";
import AddContent from "./add-content-dialog";
import ShareButton from "./share-button";

const AppHeader = () => {
  return (
    <header className="flex w-full items-center justify-end border-b-2 shadow-md dark:bg-black bg-zinc-100">
      <nav className="flex items-center justify-end w-full p-2">
        <div className="flex items-center justify-between md:w-1/2 w-full">
          <Input
            placeholder="Search.."
            type="search"
            className="w-72 bg-white dark:bg-black max-md:hidden"
          />
          <div className="flex items-center justify-center max-md:justify-end max-md:w-full gap-3">
            <ShareButton/>
            <AddContent />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
