import { ReactElement } from "react";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { DocsIcon } from "../../icons/DocsIcon";
import { LinkIcon } from "../../icons/LinkIcon";
import { TagIcon } from "../../icons/TagIcon";

export interface NavItemProps {
    iconLabel: string;
    icon: ReactElement | "#";
    href: string;
  }
  const navItmes: NavItemProps[] = [
    { href: "", iconLabel: "Twitter", icon: <TwitterIcon /> },
    { href: "", iconLabel: "Videos", icon: <YoutubeIcon /> },
    { href: "", iconLabel: "Docs", icon: <DocsIcon /> },
    { href: "", iconLabel: "Links", icon: <LinkIcon /> },
    { href: "", iconLabel: "Tags", icon: <TagIcon /> },
  ];

export const SideItem = () => {
  return (
    <ul className=" flex flex-col justify-center items-center pl-4 ">
          {navItmes.map((item) => (
            <li
              key={item.iconLabel}
              className="flex justify-start hover:bg-gray"
            >
              <a
                href={item.href}
                className="text-gray-700 -200 w-48 hover:text-lime-500 hover:font-bold hover:uppercase border-b flex justify-center items-center p-2 py-3  "
              >
                <span className="w-3/12  flex justify-start items-center h-12 ">
                  {item.icon}
                </span>
                <span className="w-9/12 ">{item.iconLabel}</span>
              </a>
            </li>
          ))}
        </ul>
  )
}
