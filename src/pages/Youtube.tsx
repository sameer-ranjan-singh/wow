import { Card } from "../components/ui/Card";
import { MainHeader } from "../components/ui/MainHeader";
import { TagBar } from "../components/ui/TagBar";
import {
  ContentLiveOrDeleted,
  ContentProps,
  useContent,
} from "../hooks/useContent";
import { ContentNotFound } from "../components/ui/ContentNotFound";
import { filterContentByPage } from "../utils/filterPageContent";

export const Youtube = () => {
  const contents: ContentLiveOrDeleted = useContent();
  const filteredContent = filterContentByPage({
    contents,
    pageName: "Youtube",
  });

  return (
    <div className="w-full h-screen pb-20 bg-gradient-to-br from-red-600 to-red-800 ">
      <div className="m-8">
        <MainHeader title="Youtube" contentType="Youtube" />
      </div>
      <div className="m-8 flex justify-start items-center">
        <TagBar contents={filteredContent} type="Youtube" />
      </div>
      <div className="w-full gap-5 pb-20 mx-auto flex flex-wrap justify-center items-center">
        {filteredContent.length != 0 ? (
          filteredContent.map((content: ContentProps) => (
            <Card
              key={Math.floor(Math.random() * 100)}
              _id={content._id}
              theme="light"
              type={content.type}
              title={content.title}
              link={content.link}
              tags={content.tags}
              favourite={content.favourite}
              disableCard={content.disableCard}
              createdAt={content.createdAt}
              updatedAt={content.updatedAt}
            />
          ))
        ) : (
          <ContentNotFound />
        )}
      </div>
    </div>
  );
};
