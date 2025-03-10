import { Card } from "../components/ui/Card";
import { ContentNotFound } from "../components/ui/ContentNotFound";
import { MainHeader } from "../components/ui/MainHeader";
import {
  ContentLiveOrDeleted,
  ContentProps,
  useContent,
} from "../hooks/useContent";

export const Trash = () => {
  const contents: ContentLiveOrDeleted = useContent();
  const disabledContent = contents.disabledData;

  return (
    <div className="w-full h-screen pb-20 bg-black">
      <div className="m-8">
        <MainHeader title="Favs" contentType="Fav" />
      </div>
      <div className="w-full gap-5 pb-20 mx-auto flex flex-wrap justify-center items-center">
        {disabledContent.length != 0 ? (
          disabledContent.map((content: ContentProps) => (
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
