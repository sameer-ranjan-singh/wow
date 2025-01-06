import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";

type cardThemeTypes = "dark" | "light";
interface CardProp {
  theme: cardThemeTypes;
  title: String;
  link: String;
  type: "youtube" | "twitter";
}

const cardTheme: Record<cardThemeTypes, string> = {
  dark: "bg-slate-500 text-white hover:bg-slate-400",
  light: "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-500",
};

const cardDefaultStyles =
  "max-w-72 min-h-72 rounded-md shadow-md p-2 m-2 font-semibold border border-slate-200 flex flex-col justify-between";

export const Card = ({ theme, title, link, type }: CardProp) => {
  return (
    <>
      <div className={`${cardDefaultStyles} ${cardTheme[theme]}`}>
        <div>
          <div className="flex justify-between items-center px-2">
            <div className="flex gap-2 items-center">
              <a href={link as string}>
                <ShareIcon size="md" />
              </a>
              <h1>{title}</h1>
            </div>
            <div className="flex gap-3 ">
              <a href={link as string}>
                <ShareIcon size="md" />
              </a>
              <a href={link as string}>
                <DeleteIcon size="md" />
              </a>
            </div>
          </div>
          <div className="pt-4">
            {type == "youtube" && (
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
            {type == "twitter" && (
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
        <div className="text-start my-2">
          <span className="text-gray-400 text-xs p-2">Added on 5/01/2025</span>
        </div>
      </div>
    </>
  );
};
