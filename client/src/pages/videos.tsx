import ContentCard from "@/components/main/content-card";
import { FetchContentFormat } from "@/lib/validations/content.validation";
import { contents } from "@/store/atoms/content";
import { useRecoilValue } from "recoil";

const VideosPage = () => {
  const content = useRecoilValue(contents);
  const articles = content.filter((content) => content.type === "video");
  return (
    <div className="flex flex-col items-start justify-start">
      <h1 className="mb-4 font-bold text-xl">Videos</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 w-full">
        {articles.length > 0 ? (
          articles.map((content: FetchContentFormat) => (
            <ContentCard key={content._id} content={content} />
          ))
        ) : (
          <div className="w-full flex items-center justify-center">
            No videos found in the database.
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosPage;
