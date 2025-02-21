import { ReactElement } from "react";
import { LinkIcon } from "../../icons/LinkIcon";
import { Link } from "react-router-dom";
import { filterContentByPage } from "../../utils/filterPageContent";
import { ContentLiveOrDeleted, useContent } from "../../hooks/useContent";

interface QuickAccessProps {
  label: string;
  icon: ReactElement;
  linkCount: number;
  href: string;
}
export const QuickAccess = () => {
  const contents: ContentLiveOrDeleted = useContent();
  filterContentByPage({ contents, pageName: "Twitter" }).length;
  const accessObject: QuickAccessProps[] = [
    { linkCount: filterContentByPage({ contents, pageName: "Twitter" }).length, icon: <LinkIcon />, href: "twitter", label: "Twitter" },
    { linkCount: filterContentByPage({ contents, pageName: "Doc" }).length, icon: <LinkIcon />, href: "docs", label: "Docs" },
    { linkCount: filterContentByPage({ contents, pageName: "Fav" }).length, icon: <LinkIcon />, href: "fav", label: "My Favs" },
  ];
  return (
    <div className="w-full rounded-md p-6 flex flex-col flex-wrap justify-between md:items-start gap-6 text-gray-800 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="text-md md:text-2xl font-bold">Quick Access</div>
      <div className="w-full flex flex-wrap justify-between gap-4">
        {accessObject.map((obj) => (
          <Link
            key={obj.label}
            to={obj.href}
            className="flex justify-center items-center border border-gray-200 rounded-lg shadow-sm px-2 min-w-full md:min-w-80 hover:bg-gray-200"
          >
            <div className="flex justify-center items-center rounded-full bg-blue-100 p-2 size-8">
              {obj.icon}
            </div>
            <div className="flex flex-wrap flex-col md:flex-row md:justify-between items-center w-full p-4 rounded-sm">
              <h1 className="text-sm md:text-md font-bold">{obj.label}</h1>
              <h1 className="text-sm md:text-md font-bold">{obj.linkCount}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
