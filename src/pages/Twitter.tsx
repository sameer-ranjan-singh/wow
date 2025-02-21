import { Card } from "../components/ui/Card";
import { todaysDate } from "../components/ui/CreateContentModel";
import { MainHeader } from "../components/ui/MainHeader";
import { TagBar } from "../components/ui/TagBar";
import {
  ContentLiveOrDeleted,
  ContentProps,
  useContent,
} from "../hooks/useContent";
import { filterContentByPage } from "../utils/filterPageContent";

const defaultCards = [
  {
    key: Math.floor(Math.random() * 100),
    _id: `${Math.floor(Math.random() * 100)}`,
    theme: "light",
    type: "Twitter",
    title: "Naval on AI",
    link: "https://x.com/naval/status/1880837571405816159",
    tags: "",
    favourite: false,
    disableCard: false,
    createdAt: todaysDate(),
    updatedAt: todaysDate(),
  },
  {
    key: Math.floor(Math.random() * 100),
    _id: `${Math.floor(Math.random() * 100)}`,
    theme: "light",
    type: "Twitter",
    title: "Building Gather.City",
    link: "https://x.com/samXyyzz/status/1892176517628600433",
    tags: "",
    favourite: false,
    disableCard: false,
    createdAt: todaysDate(),
    updatedAt: todaysDate(),
  },
];
export const Twitter = () => {
  const contents: ContentLiveOrDeleted = useContent();
  const filteredContent = filterContentByPage({
    contents,
    pageName: "Twitter",
  });

  return (
    <div className="w-full h-screen bg-black ">
      <div className="m-8">
        <MainHeader title="Twitter" contentType="Twitter" />
      </div>
      <div className="m-8 flex justify-start items-center">
        <TagBar contents={filteredContent} type="Twitter" />
      </div>
      <div className="w-full bg-black pb-20 gap-5 mx-auto flex flex-wrap justify-center items-center">
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
          <>
            {filteredContent.length == 0 &&
              defaultCards.map((content) => (
                <Card
                  key={Math.floor(Math.random() * 100)}
                  _id={content._id as String}
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
              ))}
          </>
        )}
      </div>
    </div>
  );
};
