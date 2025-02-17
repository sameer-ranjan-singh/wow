import { useState } from "react";
import beforeCopyIcon from "../../icons/copyBefore.png";
import afterCopyIcon from "../../icons/copyAfter.png";

const CopyButton = ({ link }: { link: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const text = link || "default-text-sameer";

  const handleCopyBtn = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return undefined;
  };

  return (
    <button
      className="px-2 h-8 w-fit uppercase font-bold flex items-center rounded-lg text-xs text-gray-200 active:text-blue-500"
      onClick={() => handleCopyBtn(text)}
    >
      <img
        height={25}
        width={25}
        src={isCopied ? afterCopyIcon : beforeCopyIcon}
      />
    </button>
  );
};

export default CopyButton;
