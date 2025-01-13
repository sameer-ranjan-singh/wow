import { Card } from "../components/ui/Card";
import { ContentLiveOrDeleted, ContentProps, useContent } from "../hooks/useContent";

export const Trash = () => {
  const contents: ContentLiveOrDeleted = useContent();
  const disabledContent = contents.disabledData;
  return (
    <div>
      {contents ? (
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
            // disabledCard={content.disabledCard}
            createdAt={content.createdAt}
            updatedAt={content.updatedAt}
          />
        ))
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="font-bold font-serif">Trash is empty !</h1>
        </div>
      )}
    </div>
  );
};
