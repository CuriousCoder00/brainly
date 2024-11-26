import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContentCard = ({
  content,
}: {
  content: {
    id: string;
    title: string;
    body: string;
    link: string;
    tags: { _id: string; name: string }[];
    userId: { _id: string; name: string; email: string };
  };
}) => {
  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>{content.body}.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Added by: {content.userId.name}</p>
        <p>Email: {content.userId.email}</p>
        <a href={content.link} target="_blank" rel="noreferrer">
          {content.link}
        </a>
      </CardContent>
      <CardFooter className="flex justify-start items-center flex-wrap gap-1">
        {content.tags.map((tag, idx) => (
          <Badge key={idx}>{tag.name}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
