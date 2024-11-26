import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Share2 } from "lucide-react";
const ShareButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Share2 />
          Share Brain
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Brain</DialogTitle>
          <DialogDescription>
            Share your entire collection of notes, documents, tweets and videos
            with other. They'll be able to view your content.
          </DialogDescription>
        </DialogHeader>
        <Button className="dark:bg-sky-500 bg-sky-700 text-white hover:bg-sky-600 dark:hover:bg-sky-600">
          <Share2 />
          Share Brain
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ShareButton;
