import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FetchContentFormat } from "@/lib/validations/content.validation";
import { Link } from "react-router-dom";
import {
  AudioLines,
  Delete,
  Edit,
  Image,
  Link2,
  LucideNotepadText,
  MoreVertical,
  Video,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EditContent from "./edit-content-dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import useSession from "@/hooks/use-session";
import { BASE_API_URL } from "@/lib/data";
import axios from "axios";
import { Tweet } from "react-tweet";
import { ScrollArea } from "../ui/scroll-area";

const ContentCard = ({ content }: { content: FetchContentFormat }) => {
  const tweetA = content.link?.split("/").length;
  const tweetId = content.link?.split("/")[tweetA - 1];

  return (
    <Card className="w-full max-h-[450px] shadow-inner shadow-zinc-400">
      <CardHeader>
        <div className="flex items-start justify-start w-full gap-2">
          {content.type === "video" ? (
            <Video />
          ) : content.type === "image" ? (
            <Image />
          ) : content.type === "article" ? (
            <LucideNotepadText />
          ) : (
            <AudioLines />
          )}
          <div className="flex items-center justify-between w-full">
            <CardTitle>{content.title}</CardTitle>
            <MoreOptions content={content} />
          </div>
        </div>
        <CardDescription>{content.body}.</CardDescription>
      </CardHeader>
      <CardContent>
        {content.type === "image" && (
          <img
            src={content.link}
            alt={content.title}
            className="w-full h-40 object-cover"
          />
        )}
        {content.type === "video" ? (
          <iframe
            src={content.link}
            title={content.title}
            className="w-full h-40"
          />
        ) : null}
        {content.type === "tweet" && (
          <ScrollArea className="h-full w-full">
            <div className="flex items-start justify-start lg:w-60 md:w-52 h-48">
              <Tweet id={tweetId} />
            </div>
          </ScrollArea>
        )}
        {content.type === "audio" && (
          <div className="flex justify-center items-start relative">
            <div className="absolute w-full z-50 bottom-0">
              <audio controls className="w-full">
                <source src={content.link} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <img
              src="/imag.png"
              alt="content"
              className="w-full h-40 object-contain"
            />
          </div>
        )}
        {content.type !== "video" &&
          content.type !== "image" &&
          content.type !== "tweet" &&
          content.type !== "audio" && (
            <img
              src="/imag.png"
              alt="content"
              className="w-full h-40 object-contain"
            />
          )}
        <div className="flex items-center justify-between my-3">
          <Badge>{content.user.name}</Badge>
          {content.link && (
            <Link to={content.link} target="_blank" rel="noreferrer">
              <Link2 />
            </Link>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start items-center flex-wrap gap-1">
        {content.tags.map((tag, idx) => (
          <Badge key={idx}>#{tag.name}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

const MoreOptions = ({ content }: { content: FetchContentFormat }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <MoreVertical />
      </PopoverTrigger>
      <PopoverContent
        className="w-[100px] p-0 mt-6 overflow-hidden"
        sideOffset={1}
        side="left"
      >
        <div className="flex flex-col gap-2">
          <EditButton content={content} />
          <DeleteButton id={content._id} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContentCard;

const DeleteButton = ({ id }: { id: string }) => {
  const { session } = useSession();
  const { toast } = useToast();

  const [isPending, setIsPending] = useState<boolean>(false);

  const deleteHandler = async () => {
    setIsPending(true);
    try {
      const res = await axios.delete(`${BASE_API_URL}/content/${id}`, {
        headers: {
          Authorization: `${session.token}`,
        },
      });
      if (res.data.success) {
        toast({
          title: "Content Deleted",
          description: "Content has been Deleted successfully.",
        });
        setIsPending(false);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to Delete content.",
        });
        setIsPending(false);
      }
      setIsPending(false);
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: err.response.data.message,
      });
      setIsPending(false);
    }
    setIsPending(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <Button
          variant={"ghost"}
          className="p-0 rounded-none flex items-center justify-start gap-3 px-2"
        >
          <Delete />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Content</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this content?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button disabled={isPending} onClick={deleteHandler}>
            Delete
          </Button>
          <DialogClose asChild>
            <Button disabled={isPending} variant="ghost">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const EditButton = ({ content }: { content: FetchContentFormat }) => {
  return (
    <EditContent content={content}>
      <DialogTrigger asChild className="w-full">
        <Button
          variant={"ghost"}
          className="p-0 rounded-none flex items-center justify-start gap-3 px-2"
        >
          <Edit />
          Edit
        </Button>
      </DialogTrigger>
    </EditContent>
  );
};
