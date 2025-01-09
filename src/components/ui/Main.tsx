import { useState } from "react";
import { CreateContentModel } from "./CreateContentModel";
import { Button } from "./Button";
import { PlusIcon } from "../../icons/PlusIcon";
import { LoadingIcon } from "../../icons/LoadingIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { Card } from "./Card";
import { ContentProps, useContent } from "../../hooks/useContent";

export const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const contents: ContentProps[] = useContent();

  return (
    <>
      <div className=" flex flex-col p-8">
      <CreateContentModel
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
        <div className="flex justify-between my-4">
          <div>
            <h1 className="font-bold text-md md:text-2xl ml-2">All Notes</h1>
          </div>
          <div className="flex gap-2 justify-end items-center ">
            <Button
              startIcon={<ShareIcon size="md" />}
              variant="secondary"
              size="md"
              text="Share Wow"
              loading={false}
              loadIcon={<LoadingIcon size="sm" />}
              onClick={() => {}}
            />
            <Button
              onClick={() => setModalOpen(!isModalOpen)}
              startIcon={<PlusIcon size="md" />}
              variant="primary"
              size="md"
              text="Add Content"
              loading={false}
              loadIcon={<LoadingIcon size="sm" />}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          {JSON.stringify(contents)}
          {contents ? (
            contents.map((content: ContentProps) => (
              <Card
                key={Math.floor(Math.random() * 100)}
                theme="light"
                title={content.title}
                type={content.type}
                link={content.link}
              />
            ))
          ) : (
            <h1>No Content Found !</h1>
          )}
          {/* <Card
          theme="light"
          type="twitter"
          link="https://x.com/han_wahe_sameer/status/1874493401430958569"
          title="First X post"
        /> */}
        </div>
      </div>
    </>
  );
};
