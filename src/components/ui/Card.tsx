import axios from "axios";
import { ContentProps } from "../../hooks/useContent";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { HeartIcon } from "../../icons/HeartIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { BACKEND_URL } from "../../config";

type cardThemeTypes = "dark" | "light";
interface CardProp extends ContentProps {
  theme: cardThemeTypes;
}

const cardTheme: Record<cardThemeTypes, string> = {
  dark: "bg-slate-500 text-white hover:bg-slate-400",
  light: "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-500",
};

const cardDefaultStyles =
  "max-w-72 rounded-md shadow-md p-2 m-2 font-semibold border border-slate-200 flex flex-col justify-between";

export const Card = ({_id,theme,type,title,link,tags,favourite,createdAt}: CardProp) => {

  const deleteCard = async () => {
    await axios.put(`${BACKEND_URL}/api/v1/content`,{
      disableCard: true,
      contentId: _id,
    }, {
      headers: { Authorization: localStorage.getItem("token") },
    });
  };

  const shareCard = async () => {};
  const addToFav = async () => {
    await axios.put(`${BACKEND_URL}/api/v1/content`,{
      contentId: _id,
      favourite: !favourite, //check !favourite 
    }, {
      headers: { Authorization: localStorage.getItem("token") },
    });
  };

  return (
    <>
      <div className={`${cardDefaultStyles} ${cardTheme[theme]}`}>
        <div>
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center">
              <h1 className="w-full bg-white rounded-md p-2 pb-0 border border-l-gray-500 border-l-4 shadow-sm">
                {title}
              </h1>
            </div>
            <div className="flex gap-3 items-start">
              <div onClick={shareCard}>
                <ShareIcon size="md" />
              </div>
              <div onClick={deleteCard}>
                <DeleteIcon size="md" />
              </div>
            </div>
          </div>
          <div className="pt-4">
            {type == "Youtube" && (
              <iframe
                className="w-full "
                src={link as string}
                // src={link.replace("watch","embed").replace("?v=","/")}
                title="The ₹1 Crore Salary Race: Engineering vs Finance vs Startup"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            {type === "Twitter" && (
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  At dawn from the gateway to Mars, the launch of Starship’s
                  second flight test
                  <a href="https://t.co/ffKnsVKwG4">
                    pic.twitter.com/ffKnsVKwG4
                  </a>
                </p>
                &mdash; SpaceX (@SpaceX)
                <a href={link.replace("x.com", "twitter.com")}>
                  December 7, 2023
                </a>
                {/* <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">December 7, 2023</a> */}
              </blockquote>
            )}
          </div>
          <div className="pt-3">
            <ul className="flex gap-2">
              <li className="px-2 py-1 bg-green-100 text-green-500 rounded-3xl text-xs">
                #productivity
              </li>
              <li className="px-2 py-1 bg-green-100 text-green-500 rounded-3xl text-xs">
                #ideas
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 text-xs p-2 text-start">
            Added on {createdAt}
          </span>
          <div onClick={addToFav}>
            <HeartIcon favourite ={favourite}/>
          </div>
        </div>
      </div>
    </>
  );
};
