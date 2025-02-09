import { ContentLiveOrDeleted, useContent } from "../../hooks/useContent";
import { filterContentByPage } from "../../utils/filterPageContent";

interface LinkCountCard {
  label: string;
  count: () => number;
  bg: string;
}

export const LinkCounts = () => {
  const contents: ContentLiveOrDeleted = useContent();

  const linkCount: LinkCountCard[] = [
    {
      label: "Twitter",
      count: () =>
        filterContentByPage({ contents, pageName: "Twitter" }).length,
      bg: "bg-gradient-to-br from-neutral-700 to-neutral-900 text-gray-100",
    },
    {
      label: "Docs",
      count: () => filterContentByPage({ contents, pageName: "Doc" }).length,
      bg: "bg-gradient-to-br from-lime-500 to-neutral-900 text-gray-100",
    },
    {
      label: "Links",
      count: () => filterContentByPage({ contents, pageName: "Link" }).length,
      bg: "bg-gradient-to-br from-blue-500 to-neutral-900 text-gray-100",
    },
    {
      label: "Videos",
      count: () => filterContentByPage({ contents, pageName: "Youtube" }).length,
      bg: "bg-gradient-to-br from-red-500 to-neutral-900 text-gray-100",
    },
    {
      label: "Total Links",
      count: () => filterContentByPage({ contents }).length,
      bg: "bg-gradient-to-br from-white to-neutral-400 text-black",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 w-full">
      {linkCount.map((link) => (
        <div
          key={link.label}
          className={`${link.bg} flex flex-col gap-2 justify-center items-center p-4 h-36 rounded-lg bg-white w-36 md:min-w-72`}
        >
          <h1 className="text-sm md:text-md font-semibold font-serif">
            {link.label}
          </h1>
          <h1 className="text-2xl font-extrabold">{link.count()}</h1>
        </div>
      ))}
    </div>
  );
};
