import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  contentInput,
  ContentInput,
  FetchContentFormat,
} from "@/lib/validations/content.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import { BASE_API_URL } from "@/lib/data";
import axios from "axios";
import useSession from "@/hooks/use-session";
import { useToast } from "@/hooks/use-toast";

interface EditContentProps {
  children: React.ReactNode;
  content: FetchContentFormat;
}

const EditContent = ({ children, content }: EditContentProps) => {
  const { session } = useSession();
  const { toast } = useToast();
  const [tagsList, setTagsList] = useState<{ value: string; label: string }[]>(
    []
  );
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<ContentInput>({
    resolver: zodResolver(contentInput),
    defaultValues: {
      title: content.title,
      body: content.body,
      link: content.link,
      tags: content.tags.map((tag) => tag._id),
      type: content.type,
    },
  });

  const getTags = async () => {
    const { data } = await axios.get(`${BASE_API_URL}/tag/`);
    const tags = data.data.map((tag: any) => ({
      value: tag._id,
      label: tag.name.charAt(0).toUpperCase() + tag.name.slice(1),
    }));
    setTagsList(tags);
  };

  const submitHandler = async (data: ContentInput) => {
    setIsPending(true);
    try {
      const res = await axios.put(
        `${BASE_API_URL}/content/${content._id}`,
        {
          ...data,
          user: session.user.id,
        },
        {
          headers: {
            Authorization: `${session.token}`,
          },
        }
      );
      if (res.data.success) {
        toast({
          title: "Content Updated",
          description: "Content has been updated successfully.",
        });
        form.reset();
        setIsPending(false);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to Update content.",
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

  useEffect(() => {
    getTags();
  }, []);

  return (
    <Dialog>
      {children}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Content</DialogTitle>
          <DialogDescription>
            Edit the content details below to update the content.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col w-full gap-1"
            onSubmit={form.handleSubmit(submitHandler)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      ref={null}
                      placeholder="Content Title"
                      onChange={(e) => form.setValue("title", e.target.value)}
                      type="text"
                      className="bg-white dark:bg-black"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Description</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      ref={null}
                      placeholder="Content Description"
                      type="text"
                      onChange={(e) => form.setValue("body", e.target.value)}
                      disabled={isPending}
                      className="bg-white dark:bg-black"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Link</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      ref={null}
                      placeholder="Content Link"
                      onChange={(e) => form.setValue("link", e.target.value)}
                      type="text"
                      className="bg-white dark:bg-black"
                      disabled={isPending}
                    />
                  </FormControl>
                  <div className="text-xs text-gray-500 text-end">
                    In case of Image/Video/Audio provide the link of the media.
                  </div>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Type</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={(value) =>
                        form.setValue(
                          "type",
                          value as
                            | "image"
                            | "video"
                            | "article"
                            | "audio"
                            | "tweet"
                        )
                      }
                      disabled={isPending}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select A Content Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Content Types</SelectLabel>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                          <SelectItem value="image">Image</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="tweet">Tweet</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Tags</FormLabel>
                  <FormControl>
                    <MultiSelect
                      disabled={isPending}
                      ref={null}
                      options={tagsList}
                      defaultValue={field.value}
                      onValueChange={(values) => field.onChange(values)}
                      placeholder="Select Tags"
                      variant="inverted"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <Button disabled={isPending} type="submit">
              Save
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditContent;
