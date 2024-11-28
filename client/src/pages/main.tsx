import ContentCard from "@/components/main/content-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import useSession from "@/hooks/use-session";
import { BASE_API_URL } from "@/lib/data";
import { FetchContentFormat } from "@/lib/validations/content.validation";
import { contents } from "@/store/atoms/content";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const MainPage = () => {
  const { session } = useSession();
  const content = useRecoilValue(contents);
  const setContent = useSetRecoilState(contents);
  const [isPending, setIsPending] = useState<boolean>(false);
  const fetchContent = async () => {
    setIsPending(true);
    try {
      const res = await axios.get(
        `${BASE_API_URL}/content/u/${session.user.id}`
      );
      setContent(res.data.data);
    } catch (err) {
      console.log(err);
    }
    setIsPending(false);
  };
  useEffect(() => {
    fetchContent();
  }, []);
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 w-full">
      {content.length < 1 && isPending ? (
        <div>No content found yet..!!</div>
      ) : (
        content.map((content) => (
          <ContentCard key={content._id} content={content} />
        ))
      )}
    </div>
  );
};

export default MainPage;
