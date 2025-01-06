import { Button } from "./Button";
import { CloseIcon } from "./CloseIcon";
import { Input } from "./Input";

// <CreatePopup/>
export interface ContentModelProps {
  open: boolean;
  onClose: () => void;
}
export const CreateContentModel = ({ open, onClose }: ContentModelProps) => {
  return (
    <>
      {open && (
        <div className="w-screen h-screen bg-gray-800 opacity-70 fixed top-0 left-0 flex justify-center items-center">
          <div className="flex flex-col justify-between shadow-md bg-white h-1/2 p-2 min-w-96">
            <div className="flex flex-col ">
              <div className="justify-end flex h-8" onClick={onClose}>
                <CloseIcon size="lg" />
              </div>
              <div className="flex flex-col gap-2 my-4">
                <Input placeholder="Title" />
                <Input placeholder="Paste your Link" />
              </div>
            </div>
            <div>
              <Button
                variant="primary"
                size="md"
                text="+ Add"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
