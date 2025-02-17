import { useState } from "react";
import SaveButton from "./SaveButton";
import CopyButton from "./CopyButton";

export const LinkCard = ({
  link,
  _id,
}: {link: string, _id: String | undefined }) => {

    const [myLink, setLink] = useState(link)
  
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value );
      };
    return (
    <div className={`w-full border mx-4 md:m-0 p-2 flex justify-between items-center rounded-md bg-none`}>
      <input
        key={`${_id}`}
        placeholder="Store your link here"
        value={`${myLink}`}
        onChange={(event) =>
          handleOnChange(event)
        }
        className={`p-1 md:p-2 bg-transparent text-sm md:text-lg font-mono text-black focus:outline-none w-[80%]`}
      />

      {myLink == "" ? (
        <SaveButton linkId={`${_id}`} link={myLink} />
      ) : (
        <CopyButton link={myLink} />
      )}
    </div>
  );
};
