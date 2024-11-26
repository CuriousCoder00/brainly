import ContentCard from "@/components/main/content-card";
import useSession from "@/hooks/use-session";
import { BASE_API_URL } from "@/lib/data";
import { FetchContentFormat } from "@/lib/validations/content.validation";
import axios from "axios";
import { useEffect, useState } from "react";

const MainPage = () => {
  const { session } = useSession();
  const [content, setContent] = useState<FetchContentFormat[]>([]);
  const fetchContent = async () => {
    const res = await axios.get(`${BASE_API_URL}/content/u/${session.user.id}`);
    console.log(res.data);
    setContent(res.data.data);
  };
  useEffect(() => {
    fetchContent();
  }, []);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 w-full">
      {content.map((content, idx) => (
        <div className="col-span-1">
          <ContentCard key={idx} content={content} />
        </div>
      ))}
    </div>
  );
};

export default MainPage;
