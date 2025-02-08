import { useState } from "react";
import { useContent } from "../../hooks/useContent";
import { LoadingIcon } from "../../icons/LoadingIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { CreateContentModel } from "./CreateContentModel";

interface MainHeaderProps {
  title: string;
  contentType?: "Twitter" | "Link" | "Doc" | "Youtube" | "Fav" | "Trash";
}

export const MainHeader = ({ title, contentType }: MainHeaderProps) => {
  const contents = useContent();
  const [isModalOpen, setModalOpen] = useState(false);
  let enabledContent;
  if (contentType === "Fav") {
    enabledContent = contents?.enabledData.filter(
      (content) => content.favourite === true && content.disableCard === false
    );
    console.log("ASDAD :", enabledContent);
  } else {
    enabledContent = contents?.enabledData.filter(
      (content) => content.type === contentType
    );
  }

  return (
    <div className="w-full relative">
      <CreateContentModel
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="p-3 flex justify-between border bg-white rounded-md">
        <h1 className="font-bold text-md md:text-2xl ml-3 flex justify-center items-center text-neutral-800">
          {title}
        </h1>
        <div className="flex gap-4 justify-end items-center ">
          <InputBox searchList={enabledContent} />
          <Button
            onClick={() => setModalOpen(!isModalOpen)}
            startIcon={<PlusIcon size="lg" />}
            variant="primary"
            size="md"
            text=""
            loading={false}
            loadIcon={<LoadingIcon size="sm" />}
          />
        </div>
      </div>
    </div>
  );
};
