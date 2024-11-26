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

const ContentCard = ({ content }: { content: FetchContentFormat }) => {
  return (
    <Card className="w-full shadow-inner shadow-zinc-400">
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
            <MoreOptions />
          </div>
        </div>
        <CardDescription>{content.body}.</CardDescription>
      </CardHeader>
      <CardContent>
        {content.type === "image" && (
          <img src="/imag.png" alt="image" className="aspect-video w-full" />
        )}
        <div className="flex items-center justify-between my-3">
          <Badge>{content.user.name}</Badge>
          <Link to={content.link} target="_blank" rel="noreferrer">
            <Link2 />
          </Link>
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

const MoreOptions = () => {
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
          <Button
            variant={"ghost"}
            className="p-0 rounded-none flex items-center justify-start gap-3 px-2"
          >
            <Edit />
            Edit
          </Button>
          <Button
            variant={"ghost"}
            className="p-0 rounded-none flex items-center justify-start gap-3 px-2"
          >
            <Delete />
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContentCard;
