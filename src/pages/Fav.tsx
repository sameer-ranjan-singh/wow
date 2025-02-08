import { Card } from "../components/ui/Card";
import { ContentNotFound } from "../components/ui/ContentNotFound";
import { MainHeader } from "../components/ui/MainHeader";
import { TagBar } from "../components/ui/TagBar";
import {
  ContentLiveOrDeleted,
  ContentProps,
  useContent,
} from "../hooks/useContent";
import { filterContentByPage } from "../utils/filterPageContent";

export const Fav = () => {
  const contents: ContentLiveOrDeleted = useContent();
  const filteredContent = filterContentByPage({
    contents,
    pageName: "Fav",
  });
  console.log(filteredContent); //empty

  return (
    <div className="w-full h-screen bg-gradient-to-br from-yellow-400 to-yellow-500">
      <div className="m-8">
        <MainHeader title="Favs" contentType="Fav" />
      </div>
      <div className="m-8 flex justify-start items-center">
        <TagBar contents={filteredContent} type="Favs" />
      </div>
      <div className="w-full gap-5 mx-auto pb-20 flex flex-wrap justify-center items-center">
        {filteredContent.length !== 0 ? (
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
