export const SearchSuggestion = ({
  searchResult,
}: {
  searchResult: String[];
}) => {
  return (
    <div className="absolute top-16 flex flex-col gap-1 md:w-full">
      {searchResult.map((result) => (
        <div
          key={`${result}`}
          className=" p-3 bg-white bg-opacity-80 shadow-md rounded-md"
        >
          {result}
        </div>
      ))}
    </div>
  );
};
