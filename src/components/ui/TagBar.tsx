import { ContentProps } from "../../hooks/useContent";

interface TagsProps {
  type: string;
  contents: ContentProps[];
  setFilteredContent?: React.Dispatch<React.SetStateAction<ContentProps[]>>;
}

export const TagBar = ({ contents }: TagsProps) => {

  const handleTagClick = (tagName: String | undefined) => {
    console.log("tagName 1:", tagName)
    const tagFilter = contents.filter((content) => content.tags === tagName);
    console.log("tagFilter :", tagFilter)
  };

  const showcallContent = () => {
  };

  return (
    <div className="flex overflow-x-auto gap-3 justify-start items-center">
      <div
        onClick={showcallContent}
        className="rounded-sm px-3 py-2 cursor-pointer bg-gradient-to-br from-neutral-700 to-neutral-900 hover:from-neutral-900 hover:to-neutral-700 text-neutral-200  font-bold font-mono"
      >
        ALL
      </div>
      {contents.map((content) => (
        
        <div
          key={`${content._id}`}
          onClick={() => handleTagClick(content.tags)}
          className="rounded-lg px-3 py-2 cursor-pointer text-sm bg-gradient-to-br from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-blue-900  font-bold font-mono"
        >
          {content.tags}
        </div>
      ))}
    </div>
  );
};
