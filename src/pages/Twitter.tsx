import { Card } from "../components/ui/Card";
import { ContentLiveOrDeleted, ContentProps, useContent } from "../hooks/useContent";

export const Twitter = () => {
  const contents: ContentLiveOrDeleted = useContent();
  const enabledContent = contents?.enabledData;

  return (
    <div className="flex flex-wrap ">
      {enabledContent ? (
        enabledContent.map((content: ContentProps) => (
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
        <h1>No Content Found !</h1>
      )}
    </div>
  );
};
