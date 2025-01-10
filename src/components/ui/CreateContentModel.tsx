import { useRef, useState } from "react";
import { Button } from "./Button";
import { CloseIcon } from "./CloseIcon";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import SelectContentType, { typeOptions } from "./SelectContentType";

// <CreatePopup/>
export interface CreateContentModelProps {
  open: boolean;
  onClose: () => void;
}

export enum ContentTypes {
  YOUTUBE = "Youtube",
  TWITTER = "Twitter",
  LINK = "Link",
  DOC = "Doc",
}

export const CreateContentModel = ({
  open,
  onClose,
}: CreateContentModelProps) => {
  //Todo :  define interface for contentschema and create useRef for each
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const tagRef = useRef<HTMLInputElement>();
  const typeRef = useRef<HTMLInputElement>();
  const [type, setType] = useState<ContentTypes>();

  // const [type, setType] = useState(ContentTypes.YOUTUBE)

  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef?.current?.value;
    const type = typeRef?.current?.value;
    // const tags = tagRef?.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
        tags: [],
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  };

  return (
    <>
      {open && (
        <>
          <div className="w-screen h-screen bg-gray-800 opacity-70 fixed top-0 left-0 flex justify-center items-center"></div>
          <div className="w-screen h-screen  opacity-100 fixed top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col justify-between rounded-md shadow-md bg-white h-1/2 p-2 min-w-96">
              <div className="flex flex-col ">
                <div className="justify-end flex h-8" onClick={onClose}>
                  <CloseIcon size="lg" />
                </div>
                <div className="flex flex-col gap-2 my-4">
                  <Input placeholder="Title" type="text" reference={titleRef} />
                  <Input
                    placeholder="Paste your Link"
                    type="text"
                    reference={linkRef}
                  />
                  <div className="lowercase">
                    <SelectContentType
                      type={typeOptions[0]}
                      setType={typeOptions[0]}
                      reference={typeRef}
                    />
                    <Input placeholder="Type" type="text" reference={typeRef} />
                  </div>
                  {/* <Input placeholder="Tags" type="text" reference={tagRef}/> */}
                </div>
              </div>
              <div>
                <Button
                  variant="primary"
                  size="md"
                  text="+ Add"
                  onClick={addContent}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
