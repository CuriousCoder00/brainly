import ContentCard from "@/components/main/content-card";
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
    <div className="flex flex-col items-start justify-start">
      <h1 className="mb-4 font-bold text-xl">All Contents</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 w-full">
        {isPending ? (
          <div className="w-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          content.length > 0 &&
          content.map((content: FetchContentFormat) => (
            <ContentCard key={content._id} content={content} />
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
