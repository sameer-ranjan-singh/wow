import axios from "axios";
import { BACKEND_URL } from "../../config";
import saveMyFile from "../../icons/save-button.png";

const SaveButton = ({ linkId, link }: { link: String; linkId: String }) => {

  const handleSaveBtn = async () => {
    await axios.put(
      `${BACKEND_URL}/api/v1/user/saveContentLink`,
      {
        contentId: linkId,
        link: link,
      },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
  };

  return (
    <button
      className=" px-2 h-8 w-fit uppercase font-bold flex justify-center items-center rounded-lg text-xs text-gray-200 active:text-blue-500"
      onClick={handleSaveBtn}
    >
      <image height={45} width={45} href={saveMyFile} />
    </button>
  );
};

export default SaveButton;
