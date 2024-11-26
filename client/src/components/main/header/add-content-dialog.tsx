import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
} from "@/lib/validations/content.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import { BASE_API_URL } from "@/lib/data";
import axios from "axios";

const AddContent = () => {
  const [tagsList, setTagsList] = useState<{ value: string; label: string }[]>(
    []
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const form = useForm<ContentInput>({
    resolver: zodResolver(contentInput),
    defaultValues: {
      title: "",
      body: "",
      link: "",
      tags: [],
      type: "article",
      userId: "",
    },
  });

  const getTags = async () => {
    const { data } = await axios.get(`${BASE_API_URL}/tag/`);
    const tags = data.data.map((tag: any) => ({
      value: tag.name,
      label: tag.name.charAt(0).toUpperCase() + tag.name.slice(1),
    }));
    setTagsList(tags);
  };
  useEffect(() => {
    getTags();
  }, []);
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
        <Form {...form}>
          <form className="flex flex-col w-full gap-1">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Title"
                      type="text"
                      className="bg-white dark:bg-black"
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
                      placeholder="Title"
                      type="text"
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
                      placeholder="Title"
                      type="text"
                      className="bg-white dark:bg-black"
                    />
                  </FormControl>
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
                    <Select {...field}>
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
                      {...field}
                      options={tagsList}
                      onValueChange={setSelectedTags}
                      defaultValue={selectedTags}
                      placeholder="Select frameworks"
                      variant="inverted"
                      animation={2}
                      maxCount={3}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <Button className="mt-4">Add Content</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddContent;
