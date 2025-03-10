import { ReactElement } from "react";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { DocsIcon } from "../../icons/DocsIcon";
import { LinkIcon } from "../../icons/LinkIcon";
import { HeartIconFilled } from "../../icons/HeartIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { HomeIcon } from "../../icons/HomeIcon";
import { Link } from "react-router-dom";

export interface NavItemProps {
  iconLabel: string;
  icon: ReactElement | "#";
  href: string;
}
const navItmes: NavItemProps[] = [
  { href: "", iconLabel: "Home", icon: <HomeIcon /> },
  { href: "twitter", iconLabel: "Twitter", icon: <TwitterIcon /> },
  { href: "videos", iconLabel: "Videos", icon: <YoutubeIcon /> },
  { href: "docs", iconLabel: "Docs", icon: <DocsIcon /> },
  { href: "links", iconLabel: "Links", icon: <LinkIcon /> },
  { href: "fav", iconLabel: "Favs", icon: <HeartIconFilled /> },
  { href: "bin", iconLabel: "Trash", icon: <TrashIcon /> },
];

export const SideItem = () => {
  return (
    <nav>
      <ul className=" flex flex-col justify-center items-center w-full">
        {navItmes.map((item) => (
          <li key={item.iconLabel} className="flex justify-start hover:bg-gray">
            <Link
              to={item.href}
              className="hover:rounded-lg text-gray-700 w-48 gap-4 hover:bg-gray-200 hover:text-slate-500 hover:font-bold border-b flex justify-center items-center p-2 py-1"
            >
              <span className="w-2/12 flex justify-start items-center h-12 ">
                {item.icon}
              </span>
              <span className="w-9/12 ">{item.iconLabel}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
