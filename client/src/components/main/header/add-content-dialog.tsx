import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const AddContent = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="dark:bg-sky-500 bg-sky-700 text-white hover:bg-sky-600 dark:hover:bg-sky-600">
          <Plus />
          Add Content
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Content</DialogTitle>
          <DialogDescription>
            Add content to your brain by pasting a link or typing a question.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between gap-4">
          <Input
            placeholder="Paste a link or type a question.."
            type="text"
            className="w-72 bg-white dark:bg-black"
          />
          <Button>Add</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddContent;
