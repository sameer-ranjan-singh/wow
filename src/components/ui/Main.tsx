import { useState } from "react";
import { CreateContentModel } from "./CreateContentModel";
import { Button } from "./Button";
import { PlusIcon } from "../../icons/PlusIcon";
import { LoadingIcon } from "../../icons/LoadingIcon";
import { ContentLiveOrDeleted, useContent } from "../../hooks/useContent";
import { InputBox } from "./InputBox";
import { LinkCounts } from "./LinkCounts";
import { QuickAccess } from "./QuickAccess";

export const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const contents: ContentLiveOrDeleted = useContent();
  const enabledContent = contents?.enabledData;

  return (
    <>
      <div className="w-full flex justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
        {/* <div className="relative flex justify-center items-center h-screen">
          <BackgroundLogo />
        </div> */}
        <div className="min-h-screen">
          <div className="relative flex flex-col py-8 gap-8">
            <CreateContentModel
              open={isModalOpen}
              onClose={() => setModalOpen(false)}
            />

            <div className="mx-4 p-3 flex justify-between border bg-white rounded-md">
              <h1 className="font-bold text-md md:text-2xl ml-3 flex justify-center items-center text-neutral-800">
                Overview
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
            <div className="mx-4 flex justify-center">
              <LinkCounts />
            </div>
            <div className="mx-4 flex justify-center">
              <QuickAccess />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
